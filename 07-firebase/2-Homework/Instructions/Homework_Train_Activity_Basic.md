# Week 7 Assignment - Train Scheduler (Basic - Recommended)

##### _Because that Rock Paper Scissors Game is Too Damn Hard_

### Overview

In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

- - -

### Setup

* We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and Heroku to host your finished site.

### Instructions

* Make sure that your app suits this basic spec:
  * When adding trains, administrators should be able to submit the following:
    * Train Name
    * Destination 
    * First Train Time -- in military time
    * Frequency -- in minutes
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  * Users from many different machines must be able to view same train times.
  * Styling and theme are completely up to you. Get Creative!

### Example Site

![train homework](Train_Time_Image.png)

### Bonus (Extra Challenges)

* Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
