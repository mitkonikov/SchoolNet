## SchoolNet Core Installation Notes

The following are old installations notes. Some steps may have been changed and not documented because work on the Core is not our biggest priority at the moment.

### STEP 1: Download the repository

If you already have the GitHub setup for Desktop and Visual Studio Code, just clone the repository. But if you don't have it, here's how to set it up.

**On a 64bit machine:**
 - *Optional:* Download Visual Studio Code. (We highly recommend it!)
 - Download Git Bash
 - Download GitHub Desktop

and have a GUI where you can clone the repository and watch it for further changes. With a press of a button, GitHub Desktop can connect it to Visual Studio Code.

**On 32bit machine**, READ [HERE](https://github.com/mitkonikov/SchoolNet/blob/master/documentation/install/Git-32bit.md)

##### IN WORSE CASE SCENARIO:
If you really don't want to be directly connected to GitHub and lose the ability to pull request any changes, you can download the repository as a .ZIP file.

<br>

### STEP 2: Download dependencies

SchoolNet requires [Node.js](https://nodejs.org/) v10.15.0 or later to run.

To install and setup the server properly, we have created the `config.js` file. It will require administrator/superuser privileges in order to create the symbolic links.

```sh
$ cd SchoolNet
$ node config.js
$ tsc
$ node build
```

We are implemented symbolic links to avoid dependency duplications. We have full support for Windows and Linux.

You would also need the missing libraries from the `/client/static/js` and the `/client/static/css` folder. Because we don't have the rights to distribute these dependencies in our repository, you would need to download them yourself.

```
/client/static/css/jquery.fullPage.css

/client/static/js/jquery.fullpage.js
/client/static/js/swal.js
```

Here are some download links for the libraries:
 - [swal.js](https://cdn.jsdelivr.net/npm/sweetalert2@9)

We are going to modify the way of serving of these files as we implement the Svelte Frame. But, for now, this remains a pain. *(TODO)*

* There is a file in the `css` and `js` folder listing the missing files there.

You should only see errors about the connection to the databases. Now it's the time to install XAMPP!

* Download XAMPP and install the Apache server and the MySQL database.
* Download MongoDB with Compass

<br>

### STEP 3: .env FILE

Create .env file in the main directory with the following options:

```
PORT = 3000
PORT_ZNAM = 3001
DOMAIN = <this is only for production env>
DATABASE_PORT = 3306
DATABASE_USER = <here the database username>
DATABASE_PASS = <here the database password>
SESSION_NAME = <session name>
SESSION_SECRET = <!session secret!>
GUEST_SESSION_NAME = <guest session name>
GUEST_SESSION_SECRET = <!guest session secret!>
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
* We have two types of sessions (this is because of the different cookie expiration dates and the fact that we don't use passport.js authentication for guests):
  - Passport.js' cookie session for authenticated users
  - Our own cookie session for guests