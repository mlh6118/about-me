'use strict';

// Declare variables for total number of correct answers.
let totalCorrect = 0;

let userName = prompt('Please enter your first name.');

alert(userName + ', you will now be asked five questions.');

function raisedIn() {
  let raisedIn = prompt('Marni was raised in San Francisco, CA? (Yes/No)').toLowerCase();
  // console.log(raisedIn);
  
  if(raisedIn === "no" || raisedIn === "n"){
    // console.log('You have answered correctly.');
    alert('You have answered correctly.');
    totalCorrect = totalCorrect + 1;
  }
  else{
    // console.log('That is incorrect.');
    alert('That is incorrect.');
  }
}

raisedIn();

function degrees() {
  let degrees = prompt('Marni has two BS degrees? (Yes/No)').toLowerCase();
  // console.log(degrees);
  
  if(degrees === "no" || degrees === "n"){
    // console.log('You have answered correctly.');
    alert('You have answered correctly.');
    totalCorrect = totalCorrect + 1;
  }
  else{
    // console.log('That is incorrect.');
    alert('That is incorrect.');
  }
}

degrees();

function computers() {
  let computers = prompt('Marni has experience with 4 types of computers? (Yes/No)').toLowerCase();
  // console.log(computers);
  
  if(computers === "yes" || computers === "y"){
    // console.log('You have answered correctly.');
    alert('You have answered correctly.');
    totalCorrect = totalCorrect + 1;
  }
  else{
    // console.log('That is incorrect.');
    alert('That is incorrect.');
  }
}

computers();

function jobs() {
  let jobs = prompt('Marni has experience as a teacher? (Yes/No)').toLowerCase();
  // console.log(jobs);
  
  if(jobs === "yes" || jobs === "y"){
    // console.log('You have answered correctly.');
    alert('You have answered correctly.');
    totalCorrect = totalCorrect + 1;
  }
  else{
    // console.log('That is incorrect.');
    alert('That is incorrect.');
  }
}
jobs();

function puzzle() {
  let puzzle = prompt('Marni views programming like a puzzle? (Yes/No)').toLowerCase();
  // console.log(puzzle);
  
  if(puzzle === "yes" || puzzle === "y"){
    // console.log('You have answered correctly.');
    alert('You have answered correctly, ' + userName + '.');
    totalCorrect = totalCorrect + 1;
  }
  else{
    // console.log('That is incorrect.');
    alert('That is incorrect, ' + userName + '.');
  }
}
puzzle();

// Create a guessing game that prompts the user for a computer generated number.  Give the user a total of four (4) guesses.  Let the user know if the guesses are too high, too low, or correct.  After all guesses are used up and still incorrect, let the user know what the correct answer is.

// Declare variables for number guessing game.
let numberGuessed = 0;
let numberOfGuesses = 4;
let correctAnswer = Math.floor(Math.random()*101); // Set up a random number between 0 and 100.

// Inform the user of the game.
alert('Let\'s play a guessing game.  You will get four (4) chances to guess a computer generated number between 0 and 100.');

// Prompt user for guess.
numberGuessed = prompt('Please enter your guess for the computer generated number.');

while(parseInt(numberGuessed) !== correctAnswer && (numberOfGuesses - 1) > 0){
  numberOfGuesses --;
  if (parseInt(numberGuessed) < correctAnswer){
    numberGuessed = prompt('You have incorrectly guessed the number.  The actual number is higher.  Please guess again.');
  }
  else if(parseInt(numberGuessed) > correctAnswer){
    numberGuessed = prompt('You have incorrectly guessed the number.  The actual number is lower.  Please guess again.');
  }
  else{
    numberGuessed = prompt('You have not entered a valid number.  Please guess again.');
  }
}

if(parseInt(numberGuessed) === correctAnswer){
  alert('You have guessed the computer generated number!');
  totalCorrect = totalCorrect + 1;
}
else{
  alert('The computer generated number was ' + correctAnswer);
}

// Create a guessing game that can have multiple correct answers.  Give the user six (6) guesses.  If the user guesses correctly, let them know.  If they run out of guesses, let them know what the possible answers were.

// Declare variables.
const favActivities=['kitties', 'cooking', 'traveling', 'escape rooms', 'baseball', 'learning', 'puzzles', 'building'];
let activityGuessed = '';
let guessesRemaining = 6;
let answeredCorrectly = 'No';
let allAnswers = '';

// Collate all of the answers into a single variable called allAnswers.
for(let i = 0; i < favActivities.length - 1; i++){
  allAnswers += favActivities[i] + ",  ";
}

// Add the last activity without the trailing ",".
allAnswers += favActivities[favActivities.length - 1];

// Inform the user of the game.
alert('Let\'s play a new game.  Try to guess one of my favorite activities using one or two words.  You have up to six (6) guesses.');

// Prompt user for guess.
activityGuessed = prompt('Please enter one or two words that you think are a favorite activity of Marni\'s.');

// activityGuessed = activityGuessed.toLowerCase();

for(let j = (guessesRemaining - 1); j > 0; j --){ // Must use -1 to account for the initial guess above.
  for(let i = 0; i < favActivities.length; i++){
    // alert(favActivities[i]);
    if (activityGuessed.toLowerCase() === favActivities[i]){
      alert('You have guessed a favorite activity of Marni\'s correctly!');
      answeredCorrectly = 'Yes';
      totalCorrect = totalCorrect + 1;
      break;
    }
    else{
      console.log(activityGuessed);
    }
  }

  // Break out of for loop if answer is correct.
  if (answeredCorrectly === 'Yes'){
    break;
  }

  activityGuessed = prompt('You have not guessed any of Marni\'s favorite activities correctly.  Please try again.');

}

// Tell the user what the possible answers were.
alert("The possible answers were: " + allAnswers);

// Tell the user how many answers were correct.
alert("You have scored " + totalCorrect + " out of a possible 7.");