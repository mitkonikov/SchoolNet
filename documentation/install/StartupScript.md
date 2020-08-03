## Make a Server Startup Script

Create a file for your startup script and write your script in the file:

```properties
sudo nano /etc/init.d/superscript
```

Here you write every command you want to be executed on startup.

Save and exit: `Ctrl+X` > `Y` > `Enter`

Make the script executable:

```properties
sudo chmod 755 /etc/init.d/superscript
```

Register script to be run at startup:

```properties
sudo update-rc.d superscript defaults
```