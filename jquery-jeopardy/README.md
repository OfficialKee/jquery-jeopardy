# jQuery Jeopardy

(*****jquery optional)

Welcome to Jeopardy! In this assignment, you'll create an application that asks the user Jeopardy questions and keep track of their score.

Check out a demo of what this might look like below:

<img src="demo.gif"/>

## Requirements

* A grid of Jeopardy dollar amounts are displayed on the screen
* Upon clicking an dollar amount, a question is displayed
* The user can submit an answer
  * If they are correct, their score is updated

## Overview

Included in this assignment is `jeopardy.json`, a file that contains an array with ~50,000 Jeopardy questions. It looks like this:

```javascript
[
  {
    "showNumber": 4680,
    "date": "12/31/04",
    "round": "Jeopardy!",
    "category": "HISTORY",
    "value": "$200",
    "question": "For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory",
    "answer": "Copernicus"
  },
  "..."
```

You'll use this data file to get Jeopardy questions and answers. 

For the base assignment, if the user clicks a $200 question, the app will display a random $200 question from the dataset (and same with the other dollar amounts).

## Steps

#### 1. Create your files

* Start off by creating an `index.html`, `main.js`, and `styles.css`
* In `index.html`, add two `script` tags to import firt `jeopardy.json` followed by `main.js`
* Also add a `link` tag to import `styles.css`
* Finally, if planning on using jquery, add `jquery` to your `index.html`. You can do this by adding the following line to your `<head>`
  * `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`  THIS IS OPTIONAL!


#### 2. Build the layout of dollar amounts

Write code to build the grid of $100, $200, etc. This could be done in `index.html`, but I'd recommend doing this through `main.js` using the jQuery equivalents of `document.createElement` and `.appendChild`.

Also, add some style rules in `styles.css` to make things look reasonable.

#### 3. Get a Jeopardy question

Now, make it so that when one of your $100, $200, etc. buttons are pressed, a random question of that dollar value is displayed. 

To do this, make a `fetch` request to `jeopardy.json`. When one of the dollar amounts is clicked, you can filter the questions to only those with the correct dollar amount. Then, choose one of those questions randomly. It's okay that a different question is chosen each time even when you press the same button.

Display this question on the DOM somewhere reasonable.

#### 4. Handling a user guess

At this point, it's time to handle a guess from the user. We'll need to add a text input and a submit button to the page. This is where the user will enter their guess. Do this in the HTML (or the JS if you like).

Now, in the JS, add a click listener to the submit button. When the submit button is pressed, identify whether the user entered guess matches the correct answer. To know this, you'll probably need to have stored the selected question in a global variable somewhere.

If the user is incorrect, display a message telling them so along with the correct answer.

If the user is correct, dispaly a congradulatory message!

#### 5. Keeping score

In this step we'll add a score indicator.

First, create a place to put the score in the HTML.

Now, anytime a user gets a quetion right, add the score of that question (i.e.: $200) to the user's total score. One challenge here will be converting the string `"$200"` to the number `200`.

#### 6. Gray Squares

Make a square become gray and unclickable after being chosen.

## Stretch goals

* Make it so the user cannot click on another question until a guess is made for their currently clicked question.  

* Instead getting a random question everytime a button is pressed, populate the game with the questions from a single past Jeopardy game. To do this, randomly choose a valid 'show number' (see `jeopardy.json` data) and use all the questions with that show number. As part of this, display a category (found in the data) over each column of $ amounts.

