from __future__ import absolute_import, division, print_function

import tensorflow as tf
tf.enable_eager_execution()

import numpy as np
import os
import sys
import time

import functools
import fileinput
import random

import codecs
sys.stdout = codecs.getwriter('utf8')(sys.stdout.buffer)
sys.stdin = codecs.getwriter('utf8')(sys.stdin.buffer)
sys.stderr = codecs.getwriter('utf8')(sys.stderr.buffer)

DIR_PATH = os.path.dirname(os.path.realpath(__file__))

WORDS_TXT_FILE = DIR_PATH + "/wikipedia-mk-database-words.txt"
checkpoint_dir = DIR_PATH + '/training_checkpoints'

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

char2idx = None
idx2char = None

vocab_size = 0
text_lenght = 0
text_as_int = None

rnn = functools.partial(
    tf.keras.layers.GRU, recurrent_activation='sigmoid')

# The maximum length sentence we want for a single input in characters
seq_length = 10

# The embedding dimension 
embedding_dim = 64

# Number of RNN units
rnn_units = 256

EPOCHS = 3

BATCH_SIZE = 10

def prepare(DATABASE_FILE):
    global embedding_dim, rnn_units, EPOCHS, seq_length, text_as_int
    global char2idx, idx2char, vocab_size, text_lenght, rnn

    # Read, then decode for py2 compat.
    text = open(DATABASE_FILE, 'rb').read().decode(encoding='utf-8')

    # length of text is the number of characters in it
    text_lenght = len(text)
    #print ('Length of text: {} characters'.format(text_lenght))

    # The unique characters in the file
    vocab = sorted(set(text))

    # Length of the vocabulary in chars
    vocab_size = len(vocab)

    #print ('{} unique characters'.format(vocab_size))
    # print (vocab)

    #print ("Letters in the official alphabet: ", len("абвгдѓежзѕијклљмнњопрстќуфхцчџш"))

    char2idx = {u:i for i, u in enumerate(vocab)}
    idx2char = np.array(vocab)

    text_as_int = np.array([char2idx[c] for c in text])

    #print(" ======================================================== ")

def trainModel():
    global embedding_dim, rnn_units, EPOCHS, seq_length, BATCH_SIZE
    global char2idx, idx2char, vocab_size, text_lenght, rnn, checkpoint_dir, text_as_int

    examples_per_epoch = text_lenght//seq_length

    # Create training examples / targets
    char_dataset = tf.data.Dataset.from_tensor_slices(text_as_int)

    sequences = char_dataset.batch(seq_length+1, drop_remainder=True)

    dataset = sequences.map(split_input_target)

    steps_per_epoch = examples_per_epoch//BATCH_SIZE
    
    # Buffer size to shuffle the dataset
    # (TF data is designed to work with possibly infinite sequences, 
    # so it doesn't attempt to shuffle the entire sequence in memory. Instead, 
    # it maintains a buffer in which it shuffles elements).
    BUFFER_SIZE = 10000
    
    dataset = dataset.shuffle(BUFFER_SIZE).batch(BATCH_SIZE, drop_remainder=True)
    # print(dataset)

    model = build_model(
    vocab_size = vocab_size, 
    embedding_dim=embedding_dim, 
    rnn_units=rnn_units,
    batch_size=BATCH_SIZE,
    rnn=rnn)

    randomPrediction(model, dataset)

    model.summary()

    optimizer = tf.train.AdamOptimizer()

    # Name of the checkpoint files
    checkpoint_prefix = os.path.join(checkpoint_dir, "ckpt_{epoch}")

    for epoch in range(EPOCHS):
        start = time.time()
        
        # initializing the hidden state at the start of every epoch
        # initally hidden is None
        model.reset_states()
        
        for (batch_n, (inp, target)) in enumerate(dataset):
            with tf.GradientTape() as tape:
                # feeding the hidden state back into the model
                # This is the interesting step
                predictions = model(inp)
                loss = tf.losses.sparse_softmax_cross_entropy(target, predictions)
                
            grads = tape.gradient(loss, model.trainable_variables)
            optimizer.apply_gradients(zip(grads, model.trainable_variables))

            if batch_n % 100 == 0:
                template = 'Epoch {} Batch {} Loss {:.4f}'
                #print(template.format(epoch+1, batch_n, loss))

        # saving (checkpoint) the model every 5 epochs
        if (epoch + 1) % 5 == 0:
            model.save_weights(checkpoint_prefix.format(epoch=epoch))

        #print ('Epoch {} Loss {:.4f}'.format(epoch+1, loss))
        #print ('Time taken for 1 epoch {} sec\n'.format(time.time() - start))

        model.save_weights(checkpoint_prefix.format(epoch=epoch))

    #print(" ======================================================== ")

def loadModel():
    global vocab_size, embedding_dim, rnn_units, rnn
    global checkpoint_dir

    latestModel = tf.train.latest_checkpoint(checkpoint_dir)

    model = build_model(vocab_size, embedding_dim, rnn_units, batch_size=1, rnn=rnn)

    model.load_weights(latestModel)

    model.build(tf.TensorShape([1, None]))

    #print(" ======================================================== ")

    #model.summary()

    #print(" ======================================================== ")

    return model

def predict(model, start_string, temperature):
    print(generate_text(model, start_string=start_string, temperature=temperature))

def predictRandomStartString(model, temperature):
    print(generate_text(model, temperature=temperature, start_numbers=True))

### GET JUST THE FIRST RANDOM PREDICTION FROM THE MODEL
def randomPrediction(model, dataset):
    global idx2char
    
    for input_example_batch, target_example_batch in dataset.take(1): 
        example_batch_predictions = model(input_example_batch)
        #print(example_batch_predictions.shape, "# (batch_size, sequence_length, vocab_size)")

    sampled_indices = tf.random.multinomial(example_batch_predictions[0], num_samples=1)
    sampled_indices = tf.squeeze(sampled_indices,axis=-1).numpy()

    #print("Input: \n", repr("".join(idx2char[input_example_batch[0]])))
    #print()
    #print("Next Char Predictions: \n", repr("".join(idx2char[sampled_indices])))

    example_batch_loss  = loss(target_example_batch, example_batch_predictions)
    #print("Prediction shape: ", example_batch_predictions.shape, " # (batch_size, sequence_length, vocab_size)") 
    #print("scalar_loss:      ", example_batch_loss.numpy().mean())

    #print(" ======================================================== ")

### GET THE LOSS FROM THE MODEL
def loss(labels, logits):
    return tf.keras.losses.sparse_categorical_crossentropy(labels, logits)

### BUILD THE MODEL
def build_model(vocab_size, embedding_dim, rnn_units, batch_size, rnn):
  model = tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size, embedding_dim, 
                              batch_input_shape=[batch_size, None]),
    rnn(rnn_units,
        return_sequences=True, 
        recurrent_initializer='glorot_uniform',
        stateful=True),
    tf.keras.layers.Dense(vocab_size)
  ])
  return model

### SPLIT INPUT CHUNKS
def split_input_target(chunk):
    input_text = chunk[:-1]
    target_text = chunk[1:]
    return input_text, target_text

### (OPTIONAL) PRINTING THE FIRST 20 CHARACTERS IN THE VOCAB
def printVocab(vocab, char2idx):
    # print the vocab
    print('{')
    for char,_ in zip(char2idx, range(20)):
        print('  {:4s}: {:3d},'.format(repr(char), char2idx[char]))
    print('  ...\n}')

### GENERATING TEXT BASED ON A START STRING
def generate_text(model, start_string = None, temperature=1.0, start_numbers = False):
    # Low temperatures results in more predictable text.
    # Higher temperatures results in more surprising text.
    # Experiment to find the best setting.

    global char2idx, idx2char, vocab_size
    
    # Evaluation step (generating text using the learned model)

    # Number of characters to generate
    num_generate = 50

    if start_numbers:
        input_eval = []
        start_string = ""
        for x in range(2):
            input_eval.append(random.randint(0,vocab_size - 1))
            start_string += idx2char[input_eval[x]]
        
    else:
        # Converting our start string to numbers (vectorizing) 
        input_eval = [char2idx[s] for s in start_string]
    
    input_eval = tf.expand_dims(input_eval, 0)

    # Empty string to store our results
    text_generated = []

    # Here batch size == 1
    model.reset_states()
    for i in range(num_generate):
        predictions = model(input_eval)
        # remove the batch dimension
        predictions = tf.squeeze(predictions, 0)

        # using a multinomial distribution to predict the word returned by the model
        predictions = predictions / temperature
        predicted_id = tf.multinomial(predictions, num_samples=1)[-1,0].numpy()
        
        # We pass the predicted word as the next input to the model
        # along with the previous hidden state
        input_eval = tf.expand_dims([predicted_id], 0)
        
        text_generated.append(idx2char[predicted_id])

    return (start_string + ''.join(text_generated))


def userInteraction():
    TEMP = 1.0
    START_STRING = u"ан"

    # MAIN CALLS
    prepare(WORDS_TXT_FILE)
    # trainModel()
    MODEL = None

    # UI
    while True:
        INPUT = input("> ").split()
        if (INPUT[0] == "train"):
            trainModel()
        elif (INPUT[0] == "load"):
            MODEL = loadModel()
        elif (INPUT[0] == "temperature"):
            TEMP = float(INPUT[1])
            print ("Temperature set to: " + str(TEMP))
            predict(MODEL, START_STRING, TEMP)
        elif (INPUT[0] == "startstring"):
            START_STRING = INPUT[1]
            print ("Start String set to: " + START_STRING)
            predict(MODEL, START_STRING, TEMP)
        elif (INPUT[0] == "predict"):
            predict(MODEL, START_STRING, TEMP)
        elif (INPUT[0] == "exit"):
            break

MODEL = None

def nodeSetup():
    global MODEL

    # prepare the model
    prepare(WORDS_TXT_FILE)

    # load the model
    MODEL = loadModel()

    # start listening to the node server
    nodeLoop()

def nodeLoop():
    global MODEL

    # wait for input from node
    while True:
        line = input()
        if (len(line) > 0):
            TEMP = 1.0
    
            # predict and write to stdout
            predictRandomStartString(MODEL, TEMP)
            sys.stdout.flush()

nodeSetup()