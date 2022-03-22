# VH Mentorship Workshop 1 Take-Home #3: Magic State Ball

## Overview

This take-home will give you practice with React through a fun and simple project. Additionally, the types of challenges you will be encountering here are actually **very similar** to React coding assessments that you might get when applying to front-end roles.

## Instructions

1. Open your command line (Terminal) and cd (change directory) into the folder you would like to put this project in.
2. Run ```git clone https://github.com/kevjin02/vh-magic-st8-ball.git``` to copy this starter code and then ```cd vh-magic-st8-ball``` to access the directory.
4. Run ```npm install``` to install all the dependencies
5. Run ```npm start``` and check out this boring State Ball.
6. Open the folder in VSCode
7. Take a look at the *App.js* file in the *src* folder. There is an array containing all the messages in line 8, and the first item (the 0 index) is displayed in line 15. 
8. We want to change the message when you click on the ball. This involves grabbing the event ```onClick``` from the ```<button>```. Similar to what we did in our todolist application, create a function ```changeMessage``` that is called when you click on the ```<button>``` by incrementing our ```displayIndex``` in the function ```setDisplayIndex```.
9. While this works, it doesn't provide the randomness or a real State Ball. Look up the random() function in Javascript, and use it to set our index to a random index within the array (that isn't 0).
10. That's all! Click on your Magic State Ball, and use it to predict whether you'll pass your ISD test, or win a tumbler by going submitting feedback to https://vhl.ink/feedback.

\*The solution code can be found in the ```completed``` branch.

## Challenges
Following instructions is good and all, but very unlike what you'll be doing as a real developer. Complete these challenges, make this 8-ball your own, and show it off to friends and in the `mentee-works` Discord channel! (TIP: Make Google searching your best friend)

1. **Modularize your code:** That answerArray is over 100 characters, Yuck 🤢. Let's hide it in another file. Figure out how to put answerArray in its own file, export it, and import it into `App.js`!
2. **More with states:** Having a bad day? Create a [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) that, when checked, will only let the 8-ball return positive phrases (i.e. "It is certain", "without a doubt"). You will need to create a new function to handle this, and make good friends with Stack Overflow and the documentation.
3. **What next?** Make the ball shake when you click it with CSS animations, add functionality for a space bar, create a "leaderboard" of results based on how often they show up...Anything you want! Reach out to your pod leaders or in `mentee-works` for advice!
