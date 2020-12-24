#### Installing Git Bash on 32 bit machine

On 32 bit machine, you can't download GitHub Desktop thus requiring you to clone the repository from the Git Bash. Just bear with us, it takes couple of minutes.

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
$ git clone git@github.com:<yourUsername>/SchoolNet.git
```