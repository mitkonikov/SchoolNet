# SchoolNet

#### **Real Time Gaming in School?!**

SchoolNet is a network which is designed to help teachers and students organize and colaborate together while making the classes and lessons more interactive with fun real-time games, statistics and awards. SchoolNet is and should be seen, only as a tool in the educational process. The main SchoolNet platform is still in construction, so you won't be able to join it and play it. However we are releasing the ZNAM platform, which is a so-called "Cloud of Knowledge".

## ZNAM

ZNAM is a web-app that hosts questions on multiple school subjects for anyone to practice on. It was initially designed to digitize the questions from the national prom (high-school graduation) exam. However, we have further extended the capabilities, so anyone can contribute questions. The purpose of this platform is to create a national database or cloud of knowledge which would not only be useful to teachers and students, but also to scientists and inventors a like.

## How does SchoolNet work?

SchoolNet hosts games and its main goals are to connect teachers and students together with interactive real-time games.

## When to play?

SchoolNet is designed to be used *only* in the school! *(Hell yeah!)*
Seriosly, you can contribute and make levels from home too, but when you play on the system, everyone (the students and the teacher) should be gathered **together**. It's important to have face-to-face interactions, not only considering the coordination when starting and finishing levels, but also considering the social aspect. We don't want the digitalization of a system to impact the level of social interaction - we've seen enough of that already.

## Is is hosted now?

**No, not yet.** We are still in development and any contribution or donation would speed the process a ton. Thank you.

## Plans for the future

Oh, we have huge plans and everyone is welcomed to fantasizes with us. Some of our plans include:
 - SchoolNet's course based system
 - SchoolNet's tournament system
 - The SAKAM platform - a platform for voting and exhanging ideas and changes
 - The ZBOR platform - Open Source downloadable national dictionary with cool statistics
Come down to the [contribute section](#contribute) and put your signature on the [Hall of Fame](#hall-of-fame).

## Tech
****
We are really into tech and security, here are some useful things to know about SchoolNet!

#### Dependecies
SchoolNet uses a number of open source projects to work properly:

* **[node.js](https://nodejs.org)** - The **BEST** Javascript platform for dynamic servers!
* [passport.js](http://passportjs.org) - The simplest and most reliable **authorization** platform
* [socket.io](http://socket.io/) - The fastest websocket platform for node.js
* [Express](http://expressjs.com) - Fast static serving system for node.js
* [React](https://reactjs.org/) - The world's simplest dynamic front-end
* [MaterialUI](https://material-ui.com/) - Google's modern design
* [jQuery](http://jquery.com) - duh
* [Fullpage.js](https://alvarotrigo.com/fullPage/) - An older open source version used just for the home screen
* [MySQL](https://www.mysql.com/) - The world's most popular open source database
* [XAMPP](https://www.apachefriends.org/download.html) - An Apache friend
* [Python](http://python.org) - The language in the back-end for our AI
* [Tensorflow](http://tensorflow.org) - You haven't heard of it? **Machine learning**, mate...
* [Wikipedia](http://mk.wikipedia.org) - Open source encyclopedia
* [p5.js](http://p5js.org) - Amazing library for fast dynamic animations and design
* [Sweetalert2](https://sweetalert2.github.io) - Modern pop-ups
* [SASS](https://sass-lang.com/documentation) - Easier CSS
* [MaterialDesign](https://material.io/) - The Modern look
* [VisualStudioCode](https://code.visualstudio.com/) - Top-of-the-line free open source editor
* and finally, can a project be done without [StackOverflow](http://stackoverflow.com)?

**Thanks to all the devs working on these amazing projects!**

## Development

If anyone wants to set up this server on their own computer, he can absolutely do it and here's how! We know that some of you might prefer Sublime, or Notepad++, or Visual Studio, but we **strongly** recommend **Visual Studio Code** as your main editor. It allows you to run multiple shell consoles inside the editor itself. Also, debugging Node.js app with Visual Studio Code is really easy! You can set breakpoints anywhere in the code! It's just beautiful!

> You don't need to follow every step to develop the ZNAM platform. For exclusive development of the front-end of ZNAM you only need the first step to set up the repository and after that, the development of React is described [here](https://github.com/mitkonikov/SchoolNet/blob/master/znam/README.md).

> **PAY ATTENTION**: The **API** for external games is not finished! You should **NOT** develop games for it, without contacting us!

### STEP 1: Download the repository

If you already have the GitHub setup for Desktop and Visual Studio Code, just clone the repository. But if you don't have it, here's how to set it up.

**On a 64bit machine:**
 - *Optional:* Download Visual Studio Code. (We highly recommend it!)
 - Download Git Bash
 - Download GitHub Desktop

and have a GUI where you can clone the repository and watch it for further changes. With a press of a button, GitHub Desktop can connect it to Visual Studio Code.

**On 32bit machine**, you can't download GitHub Desktop thus requiring you to clone the repository from the Git Bash. Just bear with us, it takes couple of minutes.

  - Step 1: Login into Github and fork SchoolNet
  - Step 2: Run Git Bash

The steps we are going to describe next are taken from [this GitHub help page](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

  - Step 3: Generate a SSH Key pair with this command in your Git Bash: 
  `ssh-keygen -t rsa -b 4096 -C "your@email.com"`
    - `Enter file in which to save the key: ` - Here just press ENTER
    - Enter a specific keyphrase, remember it, this will be your password
    - You have the key
  - Step 4: Run this command: `clip < ~/.ssh/id_rsa.pub` - This will copy the key to keyboard
  - Step 5: Go in your GitHub settings
  - Step 6: Go in the SSH and GPG Keys
  - Step 7: Create a new SSH Key, name it whatever, and paste the key we just copied

That's it! Now you are authenticated and ready to clone the repository!
> We recommend cloning the repository directly on the C drive, hence our first command:

```sh
$ cd "C:/"
$ git clone git@github.com:mitkonikov/SchoolNet.git
```

##### IN WORSE CASE SCENARIO: <br>
If you really don't want to be directly connected to GitHub and lose the ability to pull request any changes, you can download the repository as a .ZIP file.

<br>

### STEP 2: Download dependecies

SchoolNet requires [Node.js](https://nodejs.org/) v10.15.0 to run.

Install the dependencies from the package file and start the server.

```sh
$ cd schoolnet
$ npm install ./package.json
$ node SchoolNet.js
```

You would also need the missing libraries from the `/client/static/js` and the `/client/static/css` folder. Because we don't have the rights to distribute these dependencies in our repository, you would need to download them yourself.

```
/client/static/css/jquery.fullPage.css

/client/static/js/jquery-3.3.1.js
/client/static/js/jquery.fullpage.js
/client/static/js/p5.min.js
/client/static/js/socket.io.js
/client/static/js/swal.js
```

Here are some download links for the libraries:
 - [jquery-3.3.1.js](https://code.jquery.com/jquery-3.3.1.min.js) - Even though it's minified version, just copy the code to a normal `jquery-3.3.1.js` file
 - [p5.min.js](https://p5js.org/download/)
 - [socket.io](https://cdnjs.com/libraries/socket.io)
 - [swal.js](https://cdn.jsdelivr.net/npm/sweetalert2@9)

We are going to modify the way of serving of these files as we implement the Reactframe. But, for now, this remains a pain. *(TODO)*

* There is a file in the `css` and `js` folder listing the missing files there.

You should only see errors about the connection to the databases. Now it's the time to install XAMPP!

* Download XAMPP and install the Apache server and the MySQL database.

<br>

### STEP 3: .env FILE

Create .env file in the main directory with the following options:

```
PORT = 3000
PORT_ZNAM = 3001
DATABASE_PORT = 3306
DATABASE_USER = <here the database username>
DATABASE_PASS = <here the database password>
SESSION_NAME = <session name>
SESSION_SECRET = <!session secret!>
PASSPORT_SALT = <salt>
TATKIN_WORD_COUNT = 3000
```

Default XAMPP/MySQL username is `"root"` with empty password (`""`).<br>
Session Name, Secret and password salt are not important for development.<br>
Even though we have more than 100 000 words in the Tatkin's word database, we only supply the example database file with a liitle more than 4000. So, it's safe to say that you should put the `TATKIN_WORD_COUNT = 3000`. <br>
We know that this is not the full .env file, but it's the bare minimum you should have to start developing.

<br>

### STEP 4: Database setup

There are 4 databases that SchoolNet uses:
  * **db_net** - Main database where everything about the users is stored *(PRIVATE)*
  * **db_records** - Database where records of games that are currently played are stored *(PRIVATE)*
  * **db_words** - Database filled with words from Wikipedia and contributions from the users *(PUBLIC)*
  * **db_znam** - Database for the ZNAM platform *(PRIVATE)*

To set up the databases in myphpadmin follow the next steps:
 * Step 1: Extract the `example_databases.zip`
 * Step 2: Import the `structure.sql` file in phpmyadmin. You should get four databases with empty tables.
 * Step 3: Import the `schoolnetdbs.json` file in phpmyadmin to get example entries in the tables.

Regarding private informations (such as account info. or statistical user information), they will never be made public!

<br>

### STEP 5: Port setup

Now is the time to set up the ports.
Our default ports are:
* Node.js - 3000
* Apache  - 8080
* MySQL   - 3306

By opening the Apache config (httpd.conf) file, you need to find the `Listen` keyword and write `Listen 8080`. After restarting the servers with the correct ports, now you can go to `http://localhost:8080/phpmyadmin` to see the databases.

Go to `http://localhost:3000/` and if there are no error messages, hooray!

**Go, have fun!**

<br>

### OPTIONAL: STEP 6: Development

Because we have implemented Material Design in our project, it requires some kind of SASS compiler/watcher. We use webpack's watch command. Before running the server, just run the command: `npm run watch`

You shouldn't have any problems with the file names when building the SASS files into CSS, but if you do, just report them here.

For now, we have our Python AI in this repo, thus it requires you to download Python version > 3.6.2 if you want to try out the Tatkin game. We will shortly be making a script for you to setup Python in no time. We use the env variable 'PYTHON' to turn on/off the AI.

### NOTES:

* SchoolNet is a **really complex** network, you are going to need a couple of hours if not days to set it up...
* Ok, so, here are some things you should know:
* SchoolNet uses [.env](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786) variables
* The *StartCluster.js* module is used only in production, don't use it. Start the server by running directly `node [server]`.
* We are using SCSS for the main SchoolNet project, but yet there's no implementation for it in the React frontends (including ZNAM)
* In production we implemented the *SSL* protocol and use HTTPS server, however in development we left the HTTP server, so you can easily try it at home.

### Sources, useful links:

* Node.js [docs](https://nodejs.org/api/)
* NPM [docs](https://docs.npmjs.com/)
* React [docs](https://reactjs.org/docs/getting-started.html)
* jQuery [docs](https://api.jquery.com/)
* Socket.io official [docs](https://socket.io/docs/)
* Socket.io rooms and namespaces -> [link](https://socket.io/docs/rooms-and-namespaces/)
* p5.js [reference](https://p5js.org/reference/)
* Tensorflow text generation [tutorial](https://www.tensorflow.org/tutorials/sequences/text_generation)
* [Child Process](https://nodejs.org/api/child_process.html)
* For basic references: [w3schools.com](www.w3schools.com)
* For questions, asked them on Github
* At the end, you can always search on [YouTube](youtube.com) and [Google](google.com)

## Contribute?

Want to contribute? Our project uses GitHub, so go! Make some changes!

When contributing follow the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

[Our repository](https://github.com/mitkonikov/SchoolNetUtilities) for Behind-the-scenes scripts and utilities is on GitHub too. 

## Hall of Fame

Here are people that contributed to the building of this project. We can't thank them enough!

* Кирил Ѓоргиев - Processing of questions for the ZNAM platform

### Todos

- Switch the SchoolNet Dashboard to React.js
- Implement Material Design everywhere
- Email server
  - Verification on sign-in
  - Forgot the password
- Sign-in via Google and Facebook
- Class/students removal
- Sub-contributions
- Contributions statistics
- Add a news-feed dynamic updating
- Clear console logs
- Make a custom back-end admin control unit
- Picture profile customization
- Finalize database and file path organization
- Upload SchoolNet Works repository on GitHub
- SchoolNet API
- SEO Optimization
- Implement the Google 4.1.1 syntex rule:
  - Braces are used for all control structures,
    even if the block contains only one instruction
- Implement the Google 6.2.5 syntex rule:
  - Constant names are CONSTANT_CASED

License
----

MIT


**Open Source, Hell Yeah!**