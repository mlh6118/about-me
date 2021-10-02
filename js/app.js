'use strict';

let userName = prompt('Please enter your first name.');

alert(userName + ', you will now be asked five questions.');

let raisedIn = prompt('Marni was raised in San Francisco, CA? (Yes/No)').toLowerCase();
// console.log(raisedIn);

if(raisedIn === "no" || raisedIn === "n"){
  // console.log('You have answered correctly.');
  alert('You have answered correctly.');
}
else{
  // console.log('That is incorrect.');
  alert('That is incorrect.');
}

let degrees = prompt('Marni has two BS degrees? (Yes/No)').toLowerCase();
// console.log(degrees);

if(degrees === "no" || degrees === "n"){
  // console.log('You have answered correctly.');
  alert('You have answered correctly.');
}
else{
  // console.log('That is incorrect.');
  alert('That is incorrect.');
}

let computers = prompt('Marni has experience with 4 types of computers? (Yes/No)').toLowerCase();
// console.log(computers);

if(computers === "yes" || computers === "y"){
  // console.log('You have answered correctly.');
  alert('You have answered correctly.');
}
else{
  // console.log('That is incorrect.');
  alert('That is incorrect.');
}

let jobs = prompt('Marni has experience as a teacher? (Yes/No)').toLowerCase();
// console.log(jobs);

if(jobs === "yes" || jobs === "y"){
  // console.log('You have answered correctly.');
  alert('You have answered correctly.');
}
else{
  // console.log('That is incorrect.');
  alert('That is incorrect.');
}

let puzzle = prompt('Marni views programming like a puzzle? (Yes/No)').toLowerCase();
// console.log(puzzle);

if(puzzle === "yes" || puzzle === "y"){
  // console.log('You have answered correctly.');
  alert('You have answered correctly, ' + userName + '.');
}
else{
  // console.log('That is incorrect.');
  alert('That is incorrect, ' + userName + '.');
}

// Create a guessing game that prompts the user for Marni's favorite number.  Give the user a total of four (4) guesses.  Let the user know if the guesses are too high, too low, or correct.  After all guesses are used up and still incorrect, let the user know what the correct answer is.

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
}
else{
  alert('The computer generated number was ' + correctAnswer);
}

