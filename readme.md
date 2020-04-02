# SchoolNet

#### **Real Time Gaming in School?!**

SchoolNet is a network which is designed to help teachers and students organize and colaborate together while making the classes and lessons more interactive with fun real-time games, statistics and awards. SchoolNet is and should be seen, only as a tool in the educational process. 

## How does it work?

SchoolNet hosts games and its main goals are to connect teachers and students together with interactive real-time games.

## When to play?

SchoolNet is designed to be used *only* in the school! *(Hell yeah!)*
Seriosly, you can contribute and make levels from home too, but when you play on the system, everyone (the students and the teacher) should be gathered **together**. It's important to have face-to-face interactions in order to have coordination when starting and finishing levels.

## What do I need to join?
  - Your school needs to be registered in our system [(*why?)](#FAQ)
  - Your teacher needs to have an account

## FAQ

#### Is it free?

  - **ABSOLUTELY!**

#### Can I register without registering the school?

  - Currently, you **can't**. If you register in another school, you won't be able to play games.
  - Our system is based on school categorization and we are thinking for hosting intra-school competitions, so it's important to have your school registered!

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

### Development

> Because of the latest developments, SchoolNet officially implemented an *SSL* protocol which is much more secure. All you need to do is revert back to the HTTP server protocol. *We are building a guide on how to do that properly.*

If anyone wants to set up this server on their own computer, he can absolutely do it and here's how! We know that some of you might prefer Sublime, or Notepad++, or Visual Studio, but we **strongly** recommend **Visual Studio Code** as your main editor. It allows you to run multiple shell consoles inside the editor itself. Also, debugging Node.js app with Visual Studio Code is really easy! You can set breakpoints anywhere in the code! It's just beautiful!

> **PAY ATTENTION**: The **API** for external games is not finished! You should **NOT** develop games for it, without contacting us!

##### STEP 1: Download the repository

##### STEP 2: Download dependecies

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

* There is a file in the `css` and `js` folder listing the missing files there.

You should only see errors about the connection to the databases. Now it's the time to install XAMPP!

* Download XAMPP and install the Apache server and the MySQL database.

##### STEP 3: .env FILE

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
TATKIN_WORD_COUNT = 50000
```

##### STEP 4: Database setup

There are 4 databases that SchoolNet uses:
* **db_net** - Main database where everything about the users is stored *(PRIVATE)*
* **db_records** - Database where records of games that are currently played are stored *(PRIVATE)*
* **db_words** - Database filled with words from Wikipedia and contributions from the users *(PUBLIC)*
* **db_znam** - Database for the ZNAM platform *(PRIVATE)* *(LACK OF EXAMPLE DATABASE)*

We have example databases that will help you set up this project, private informations (such as account info. or statistical user information) will never be made public!

In the XAMPP's installation folder, you are going to see `mysql` folder, in the `data` folder you would put the three example database folders.

##### STEP 5: Port setup

Now is the time to set up the ports.
Our default ports are:
* Node.js - 3000
* Apache  - 8080
* MySQL   - 3306

By opening the Apache config (httpd.conf) file, you need to find the `Listen` keyword and write `Listen 8080`. After restarting the servers with the correct ports, now you can go to `http://localhost:8080/phpmyadmin` to see the databases.

Go to `http://localhost:3000/` and if there are no error messages, hooray!

**Go, have fun!**

##### OPTIONAL: STEP 6: Development

Because we have implemented Material Design in our project, it requires some kind of SASS compiler/watcher. We use webpack's watch command. Before running the server, just run the command: `npm run watch`

You shouldn't have any problems with the file names when building the SASS files into CSS, but if you do, just report them here.


##### NOTES:

* SchoolNet is a **really complex** network, you are going to need a couple of hours if not days to set it up...
* Ok, so, here are some things you should know:
* SchoolNet uses [.env](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786) variables
* The *StartCluster.js* module is used only in production, don't use it. Start the server by running directly `node [server]`.
* The SSL Port we are using is 443
* We are using SCSS for the main SchoolNet project, but yet there's no implementation for it in the React frontends (including ZNAM)

##### Sources, useful links:

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

### Todos

- Implement Material Design everywhere
- Switch the Dashboard to React.js
- Work on responsivness
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