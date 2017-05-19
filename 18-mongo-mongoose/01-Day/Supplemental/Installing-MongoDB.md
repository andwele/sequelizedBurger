# Installing MongoDB on your Machine

### Contents

1. [Installing MongoDB on Windows](#1-installing-mongodb-on-windows)
2. [Configuring MongoDB on Windows](#2-configuring-mongodb-on-windows)
3. [Installing MongoDB on MacOS](#3-installing-mongodb-on-macos)
4. [Configuring MongoDB on MacOS](#4-configuring-mongodb-on-macos)

- - -

## 1. Installing MongoDB on Windows

1. Go to the MongoDB download page: <a href="https://www.mongodb.com/download-center#community" target="_blank">MongoDB Download Center</a>

2. Scroll down, go to the green box with the Community Server Tab highlighted.

3. Go to the dropdown menu labeled "Version." Select "Windows Server 2008 R2 64-bit and later, with SSL support," then click the "DOWNLOAD (msi)" button.

4. The next page will thank you for downloading MongoDB then show a newsletter link. You can ignore this. In a few seconds, your browser will notify you that the file is downloading.

5. Open up Windows Explorer and locate the installation file (it should be in the default directory where your browser stores downloads). Open the file and follow the instructions. 

   * When the installer prompts you to "Choose Setup Type," click the Complete button, then carry on.

   * A window might pop up mid-installation, asking you whether you’re sure you want to download a particular component of MongoDB. Click yes, otherwise the install will fail.

- - -

## 2. Configuring MongoDB on Windows

1. **IMPORTANT**: You need to create a data directory for your MongoDB installation, or it won't run. Open Git Bash, then cd your way to the root directory: 
2. <code>cd c:</code>

3. Run the following command: 
4. <code>mkdir -p data/db</code>

5. This is the default location for MongoDB’s databases. You need a directory for your databases, or else you MongoDB will refuse to run.

6. You’ll also want to add MongoDB’s path to the PATH environment variable, so that you can run it easily from the bash command line. 

7. First, locate the directory where you installed MongoDB. This is likely C:\\Program Files\\MongoDB\\Server\\3.2\\bin. Copy this directory to your clipboard.

8. Then, open up the System menu or Control Panel on your machine, usually accessible via the Start menu or Search Bar in Windows operating systems.

9. Go to Advanced Settings.

   * If you are on Windows 10 and opened the Control Panel, click **System and Security**; **System**; and **Advanced System Settings**.

10. When a new window opens up, click the **Environment Variables** button located toward the bottom of the window.

11. An Environment Variables window should open up. Look at the bottom half of this window, a scrollable table called "System Variables." Look at the Variable column and search for the variable called Path. Click on it, then click the "Edit…" button below. 

12. The next window will look different depending on your version of Windows. You’ll either be able to press the "New" button and paste your MongoDB directory into the input box that shows up, or you’ll have to paste the directory at the end of a long string of other directories. So it goes.

13. If you would prefer video instructions for this part, watch this:
    [![Youtube Link](http://img.youtube.com/vi/sBdaRlgb4N8/0.jpg)](https://www.youtube.com/watch?v=sBdaRlgb4N8&feature=youtu.be&t=120)

14. Test if it worked: Close your current Git Bash window, then reopen it and run this command: <code>mongod</code> 
15. **NOTE**: No "b" at the end, simply <code>mongod</code>

16. If mongod is still running, great job! You’ve installed MongoDB. Your instructor will take it from here.

17. If mongod didn’t run, and instead your bash threw a "command not found" error, make sure you added MongoDB’s bin directory to your PATH variable (see step B.3). Then, close out git bash and try running mongod again. 

18. If mongod starts but closes after a series of prompts, make sure you created the data/db directory in your root. MongoDB cannot run without this directory (see steps 2.1-2.2).

19. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

- - -

## 3. Installing MongoDB on MacOS

1. Run the following command in terminal:
2. <code>brew install mongodb --with-openssl</code>

- - -

## 4. Configuring MongoDB on MacOS

1. **IMPORTANT**: You need to create a data directory for your MongoDB installation, or it will not work. First, cd your way to the root directory: 
2. <code>cd /</code>

3. Now, enter this command: 
4. <code>sudo mkdir –p /data/db</code> and then <code>sudo chown -R \`id -u\` /data/db</code>

5. With the data/db directory made, you're ready to run MongoDB. Enter this command in your terminal window: <code>mongod</code>

6. **NOTE**: No "b" at the end, simply <code>mongod</code>

7. If mongod didn’t exit from your window, great job! You’ve installed MongoDB. Your instructor will take it from here.

8. If mongod starts but closes after a series of prompts, make sure you created the data/db directory in your root directory, MongoDB cannot run without this directory (see steps 4.1-4.2).

9. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

10. If you do not want to us homebrew, you can alternatively follow these instructions: <https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/>. However, installing MongoDB without homebrew can be a bit of a headache. Installing homebrew on your mac will make your life as a web developer a metric ton easier.

- - -

### Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
