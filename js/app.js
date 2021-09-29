'use strict';

alert('You will now be asked five questions.');

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
  alert('You have answered correctly.');
}
else{
  // console.log('That is incorrect.');
  alert('That is incorrect.');
}
