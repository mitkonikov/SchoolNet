import env

import logging
logging.getLogger("tensorflow").setLevel(logging.ERROR)

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = ('3' if env.PROD else '0')

import tensorflow as tf
from tensorflow.python.keras.engine.sequential import Sequential
from tensorflow.python.ops.gen_dataset_ops import BatchDataset

not env.PROD and print("TF Eager:", tf.executing_eagerly())

import numpy as np
import sys
import time

import functools
import random

import codecs

VERBOSE_OUTPUT = not env.PROD
PRINT_MODEL_SUMMARY = not env.PROD

DIR_PATH = os.path.dirname(os.path.realpath(__file__))

WORDS_TXT_FILE = DIR_PATH + "/wikipedia-mk-database-words.txt"
CHECKPOINT_DIR = DIR_PATH + "/training_checkpoints"

char2idx = None
idx2char = None

vocab_size = 0
text_lenght = 0
text_as_int = None

rnn = functools.partial(
    tf.keras.layers.GRU, recurrent_activation='sigmoid')

SEQ_LENGTH = 10 # The maximum length sentence we want for a single input in characters
EMBEDDING_DIM = 64 # The embedding dimension 
RNN_UNITS = 256
EPOCHS = 5
BATCH_SIZE = 10

MODEL: Sequential
optimizer = tf.keras.optimizers.Adam()

def prepare(database_file):
    """Prepare the dataset, vocabulary and the mappings required

    Args:
        database_file (str): File containing all the words
    """
    global char2idx, idx2char, vocab_size, text_lenght, text_as_int

    # Read, then decode for py2 compat.
    text = open(database_file, 'rb').read().decode(encoding='utf-8')
    text = text.replace('è', 'е')
    text = text.replace('ѝ', 'и')

    text_lenght = len(text)
    VERBOSE_OUTPUT and print ('Length of text: {} characters'.format(text_lenght))

    # The unique characters in the file
    vocab = sorted(set(text))
    vocab_size = len(vocab)
    if VERBOSE_OUTPUT:
        print ("Letters in the official alphabet: ", len("абвгдѓежзѕијклљмнњопрстќуфхцчџш"))
        print ('{} unique characters in our vocab.'.format(vocab_size))
        print ("The vocab: ", vocab)

    char2idx = {u:i for i, u in enumerate(vocab)}
    idx2char = np.array(vocab)

    text_as_int = np.array([char2idx[c] for c in text])

    VERBOSE_OUTPUT and print(" ======================================================== ")

def trainModel():
    global char2idx, idx2char, vocab_size, text_lenght, rnn, text_as_int

    examples_per_epoch = text_lenght // SEQ_LENGTH

    # Create training examples / targets
    char_dataset = tf.data.Dataset.from_tensor_slices(text_as_int)

    # Slice the characters in batches of 10 chars
    sequences = char_dataset.batch(SEQ_LENGTH + 1, drop_remainder=True)

    # For each sequence create input and target vectors
    dataset = sequences.map(split_input_target)

    steps_per_epoch = examples_per_epoch // BATCH_SIZE
    
    # Buffer size to shuffle the dataset
    # (TF data is designed to work with possibly infinite sequences, 
    # so it doesn't attempt to shuffle the entire sequence in memory. Instead, 
    # it maintains a buffer in which it shuffles elements).
    BUFFER_SIZE = 10000
    
    dataset = dataset.shuffle(BUFFER_SIZE).batch(BATCH_SIZE, drop_remainder=True)
    # print(dataset[:5])

    loss = 0
    MODEL = build_model(
        vocab_size = vocab_size,
        embedding_dim=EMBEDDING_DIM,
        rnn_units=RNN_UNITS,
        batch_size=BATCH_SIZE,
        rnn=rnn
    )

    randomPrediction(MODEL, dataset)

    MODEL.summary()

    @tf.function
    def train_step(inp, target):
        with tf.GradientTape() as tape:
            predictions = MODEL(inp)
            loss = tf.reduce_mean(
                tf.keras.losses.sparse_categorical_crossentropy(
                    target, predictions, from_logits=True))
        grads = tape.gradient(loss, MODEL.trainable_variables)
        optimizer.apply_gradients(zip(grads, MODEL.trainable_variables))

        return loss

    # Name of the checkpoint files
    checkpoint_prefix = os.path.join(CHECKPOINT_DIR, "ckpt_{epoch}")

    for epoch in range(EPOCHS):
        start = time.time()
        
        # initializing the hidden state at the start of every epoch
        # initally hidden is None
        MODEL.reset_states()
        
        maxBatchSize = len(dataset)
        for (batch_n, (inp, target)) in enumerate(dataset):
            loss = train_step(inp, target)

            if batch_n % 100 == 0:
                template = 'Epoch {} Batch {}/{} Loss {:.4f}'
                print(template.format(epoch+1, batch_n, maxBatchSize, loss))

        if VERBOSE_OUTPUT:
            print('Epoch {} Loss {:.4f}'.format(epoch + 1, loss))
            print('Time taken for epoch {} - {} sec\n'.format(epoch+1, time.time() - start))

        MODEL.save_weights(checkpoint_prefix.format(epoch=epoch))

    print(" " + ("=" * 70) + " ")

def loadModel():
    global vocab_size, EMBEDDING_DIM, RNN_UNITS, rnn
    global CHECKPOINT_DIR

    latestModel = tf.train.latest_checkpoint(CHECKPOINT_DIR)

    model = build_model(vocab_size, EMBEDDING_DIM, RNN_UNITS, batch_size=1, rnn=rnn)

    model.load_weights(latestModel)

    model.build(tf.TensorShape([1, None]))

    if PRINT_MODEL_SUMMARY:
        print("=" * 70)
        model.summary()
        print("=" * 70)

    return model

def printPredict(model, start_string = None, temperature = 1.0):
    print(generate_text(model, start_string, temperature))

def randomPrediction(model, dataset: BatchDataset):
    """Get just the first random prediction from the model
    """
    global idx2char
    
    for input_example_batch, target_example_batch in dataset.take(1):
        example_batch_predictions = model(input_example_batch)
        VERBOSE_OUTPUT and print(example_batch_predictions.shape, "# (batch_size, sequence_length, vocab_size)")

    sampled_indices = tf.random.categorical(example_batch_predictions[0], num_samples=1)
    sampled_indices = tf.squeeze(sampled_indices, axis = -1).numpy()
    example_batch_loss  = loss(target_example_batch, example_batch_predictions)

    if VERBOSE_OUTPUT:
        print("Prediction shape: ", example_batch_predictions.shape, " # (batch_size, sequence_length, vocab_size)") 
        print("Scalar Loss:      ", example_batch_loss.numpy().mean())
        print(" ======================================================== ")

def loss(labels, logits):
    """Calculate the loss from the model"""
    return tf.keras.losses.sparse_categorical_crossentropy(labels, logits)

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

def split_input_target(chunk):
    """It splits the chunk into input and target subchunks.
        The input subchunk is from 0 to the element one from the last
        The target subchunk starts from 1, training the network to
        be able to predict the next character
    """
    input_text = chunk[:-1]
    target_text = chunk[1:]
    return input_text, target_text

def generate_text(model, start_string = None, temperature = 1.0):
    """Generating text based on a start string

    ## Temperature
     - Low temperatures results in more predictable text.
     - Higher temperatures results in more surprising text.
     - Experiment to find the best setting.

    ## Args:
        - model: The RNN model
        - startstring (str, optional): String which is used at the start of the word. Defaults to None.
        - temperature (float, optional): Temperature is used to determine the randomness of the word generation. Defaults to 1.0.

    ## Returns:
        str: Generated String
    """

    global char2idx, idx2char, vocab_size
    
    # Evaluation step (generating text using the learned model)

    # Number of characters to generate
    num_generate = 50

    if start_string == None:
        input_eval = []
        start_string = ""
        for x in range(2):
            input_eval.append(random.randint(0, vocab_size - 1))
            start_string += idx2char[input_eval[x]]
    else:
        # Converting our start string to numbers (vectorizing) 
        input_eval = [char2idx[s] for s in start_string]
    
    # Convert input to TF tensor
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
        predicted_id = tf.random.categorical(predictions, num_samples=1)[-1,0].numpy()
        
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
    MODEL = None

    # UI
    while True:
        INPUT = input("> ").split()
        if (len(INPUT) == 0):
            break

        if (INPUT[0] == "train"):
            trainModel()
        elif (INPUT[0] == "load"):
            MODEL = loadModel()
        elif (INPUT[0] == "temperature"):
            TEMP = float(INPUT[1])
            print ("Temperature set to: " + str(TEMP))
            printPredict(MODEL, START_STRING, TEMP)
        elif (INPUT[0] == "startstring"):
            START_STRING = INPUT[1]
            print("Start String set to:", START_STRING)
            printPredict(MODEL, START_STRING, TEMP)
        elif (INPUT[0] == "predict"):
            printPredict(MODEL, START_STRING, TEMP)
        elif (INPUT[0] == "exit"):
            break
        else:
            print("Unknown command", INPUT[0])

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
    sys.stdout = codecs.getwriter('utf8')(sys.stdout.buffer)
    sys.stdin = codecs.getwriter('utf8')(sys.stdin.buffer)
    sys.stderr = codecs.getwriter('utf8')(sys.stderr.buffer)

    # wait for input from node
    while True:
        line = input()
        if (len(line) > 0):
            TEMP = 1.0
    
            # predict and write to stdout
            printPredict(MODEL, temperature = TEMP)
            sys.stdout.flush()

userInteraction()