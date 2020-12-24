# SchoolNet

#### **Real Time Gaming in School?!**

The idea behind the SchoolNet Core is a service which will host modular sandboxed real-time educational games created and played by students. Making classes and lessons more interactive with fun real-time games, statistics and awards will be the future of the education process. The SchoolNet Core is still in construction, so you won't be able to join it and play it. However, we are releasing the **ZBOR** and **ZNAM** platform soon.

## ZNAM

ZNAM is a web-app that hosts questions on multiple school subjects for anyone to practice on. It was initially designed to digitize the questions from the national high-school graduation exam. However, we have further extended the capabilities, so anyone can contribute questions. The purpose of this platform is to create a national database or "Cloud of Knowledge" which would not only be useful to teachers and students, but also to scientists and inventors a like.

## ZBOR

ZBOR is small web-app that hosts an open-source dictionary with fast word querying. We created this dictionary only by parsing the Macedonian Wikipedia. We also trained an RNN AI model for word generation and we have plans to create new language AI models for various of interesting purposes.

### Is is hosted now?

**No, not yet.** We are still in development and any contribution or donation would speed the process a ton. Thank you.

### Plans for the future

Oh, we have huge plans and everyone is welcomed to fantasizes with us. Some of our plans include:
 - SchoolNet's course based system
 - SchoolNet's tournament system
 - The SAKAM platform - a platform for voting and exhanging ideas and changes
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
* [MongoDB](https://www.mongodb.com/) - The world's most popular NoSQL database
* [TypeORM](https://typeorm.io/#/) - Object-relational mapping library
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

If you want to develop ZBOR or ZNAM, you don't need to do learn anything about the SchoolNet Core. They are sub-apps which for know are really outside the Core. But, because of our mono-repository structure, you will have to Fork or Download to whole repo in order to contribute. We know that some of you might prefer Sublime, or Notepad++, or Visual Studio, but we **strongly** recommend **Visual Studio Code** as your main editor.

> For exclusive development of the front-end of ZNAM you only need the first step to set up the repository and after that, the development of React is described [here](https://github.com/mitkonikov/SchoolNet/blob/master/znam/README.md).

> **PAY ATTENTION**: The **API** for external games is not finished! You should **NOT** develop games for it, without contacting us!

> **THE `SERVER` FOLDER IS DEPRECATED, WE MOVED TO TYPESCRIPT AT THE MAIN `src` FOLDER!**

### OS SERVER SUPPORT

[![Windows 64bit Excellent Support](https://img.shields.io/badge/Windows%2064bit-Excellent-green.svg)](https://shields.io/)  [![Windows 32bit Good Enough Support](https://img.shields.io/badge/Windows%2032bit-Good%20Enough-green.svg)](https://shields.io/)  [![Linux 64bit Good Enough](https://img.shields.io/badge/Linux%2064bit-Good%20Enough-green.svg)](https://shields.io/)  [![Linux 32bit Good Enough](https://img.shields.io/badge/Linux%2032bit-Good%20Enough-green.svg)](https://shields.io/)

 - For Linux OS Server, please read [these](https://github.com/mitkonikov/SchoolNet/blob/master/documentation/install/Linux.md) installation steps.
 - Installation notes for the SchoolNet Core can be found [here](https://github.com/mitkonikov/SchoolNet/blob/master/documentation/install/Core.md).

<br>

### Developing ZBOR or ZNAM

Developing these two platforms is surprisingly easy. Follow these steps to get them setup.

### STEP 1: Download the repository

If you already have the GitHub setup for Desktop and Visual Studio Code, just clone the repository. But if you don't have it, here's how to set it up.

**On a 64bit machine:**
 - *Optional:* Download Visual Studio Code. (We highly recommend it!)
 - Download Git Bash
 - Download GitHub Desktop

and have a GUI where you can clone the repository and watch it for further changes. With a press of a button, GitHub Desktop can connect it to Visual Studio Code.

**On 32bit machine**, READ [HERE](https://github.com/mitkonikov/SchoolNet/blob/master/documentation/install/Git-32bit.md)

### STEP 2: Download dependencies

SchoolNet/ZNAM/ZBOR require [Node.js](https://nodejs.org/) v10.15.0 or later to run.

To install and setup the server properly, we have created the `config.js` file. It will require administrator/superuser privileges in order to create the symbolic links.

```sh
$ cd SchoolNet
$ node config.js
$ tsc
$ node build
```

We are implemented symbolic links to avoid dependency duplications. We have full support for Windows and Linux.

### STEP 3: Deal with .ENV files

In the main directory you need to have an .env file. Just run the following command in the main SchoolNet folder: 

```sh
mv example-env .env
```

This will rename the example-env file which already has some preliminary settings. You may need to add an .env file in ZBOR/ZNAM with the following line:

```
SKIP_PREFLIGHT_CHECK=true
```

This is due to React's pre-build checks. But may not be necessary.

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

## Our libraries

* [LightQuery-ORM](https://www.npmjs.com/package/lightquery-orm) - A library developed for direct quering to the database by AJAX JSON requests. This library works on top of the QueryBuilder from TypeORM.

### Todos

- Switch the SchoolNet Dashboard to Svelte
- Implement Material UI everywhere
- Dependency Clean up
- Email server
- Flexible contribution class
- Contributions statistics
- Add a news-feed dynamic updating
- Clear console logs
- Make a custom back-end admin control unit
- Picture profile customization
- Finalize database and file path organization
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