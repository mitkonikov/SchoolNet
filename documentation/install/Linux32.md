## Linux 32 bit Installation Guide

Linux 32bit is legacy, so it is very difficult to find some dependencies. But if that's your only option, here's a detailed guide.

### STEP 1: Download the repository

GitHub Desktop doesn't support Linux, so we have to use Git from the terminal to clone the repository.

1. Login into GitHub in your browser and fork SchoolNet
2. Install Git:
    - `sudo apt-get install git`
3. Generate a SSH Key pair with this command in your Terminal:
  `ssh-keygen -t rsa -b 4096 -C "your@email.com"`
    - `Enter file in which to save the key: ` - Here remember the path and press Enter
    - Enter a specific keyphrase, remember it, this will be your password
    - Now you have the key
4. You need now to copy the key to clipboard
    - First open it with `cat /root/.ssh/id_rsa.pub`
    - Copy it
5. Go in your GitHub settings
6. Go in the SSH and GPG Keys
7. Create a new SSH Key, name it whatever, and paste the key we just copied

That's it! Now you are authenticated and ready to clone the **forked** repository!
> We recommend cloning the repository directly on the C drive, hence our first command:

```sh
$ cd ~/
$ sudo git clone git@github.com:<yourUsername>/SchoolNet.git
```

### STEP 2: Download dependecies
---

### Optional: Install Visual Studio Code 32bit

We highly recommend the open source Visual Studio Code editor for further developemnt. Link to the package: https://code.visualstudio.com/Docs/?dv=linux32_deb

### Install Node.JS

Believe it or not, just downloading and installing Node.js is a pain on 32bit Linux. Download **NodeJS 12** from the *unofficial builds*. You can choose any other, but we tried with 12.1.0 which worked perfectly.

https://unofficial-builds.nodejs.org/download/release/v12.1.0/

1. Extract it wherever you want. I also renamed the folder to `node-12`.
2. Run `nano ~/.bashrc` to edit the bash startup file
3. Add the line at the end of the file:

```bash
export PATH="<where you have node>:$PATH"

# For example:
export PATH="$HOME/Documents/node-12/bin:$PATH"
```

4. Run `source ~/.bashrc`.
5. Now to test if you have the proper node installation. Run: `node -v`

### Install MySQL

Run one command at a time because you will need to configure passwords and security measures.

```properties
sudo apt-get update
sudo apt-get install mysql-server
sudo mysql_secure_installation utility
```

To make it launch on Startup:
```properties
sudo systemctl enable mysql
```

### Install MongoDB

Follow these instructions:

https://dzone.com/articles/installing-mongodb-on-32-bit-ubuntu-1510

After you have followed these instructions, you need to set up the database directories:

```properties
cd /
mkdir mongodb
mkdir mongodb/play
```

And you are ready to run the server using this command:

```
mongod --journal --storageEngine=mmapv1 --dbpath /mongodb/play
```

> TODO: Figure out a script for multiple databases...

In order to launch the server on startup, follow [these](https://github.com/mitkonikov/SchoolNet/blob/master/documentation/install/StartupScript.md) instructions and add the server launch command.

### Setup the server

To install and setup the server properly, we have created the `config.js` file. It will require superuser privileges in order to create the symbolic links.

```properties
sudo -s
cd ~/SchoolNet
node config.js
tsc
```

We are implemented symbolic links to avoid dependency duplications. We have full support for Windows and Linux.

### Setup ormconfig.js

### Run the Server

```properties
node build
```

[Let's start the party!](github.com/mitkonikov/SchoolNet)

### Using PM2

Just install it with `npm install pm2` and enable it in the `config.json` file.