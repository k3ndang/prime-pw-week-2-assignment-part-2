// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// delaring number is equal to 1
// number increment so now it is 2
// if number greater or equal to 2 then it is 'yes'
// 'yes' would appear on the screen

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// delaring name to be Dane
// condition if name is exactly Mary then you would see 'Hi, Mary'
// if condition is false and not Mary then you would see 'How do you do'
// it would be 'How do you do' on the screen

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// code equal to 123
// if code is equal exactly to 123 then secret equal to super
// then code equal to code time 2 (123 x 2 = 246)
// if code greater than 250 then secret euqal to duper (246 is less than 250 so it is still super and not duper)
// 'super' would show since code is smaller than 250

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/
// this code will show 'Welcome to Prime!'



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// intructions make colorOne to 'blue' and colorTwo to 'red', mix = true (true need to be in '')
// should be colorOne = 'blue';   colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// it should be console.log('purple'); not colorOne = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - || which mean  OR to && which mean AND
// should be (temp > 39 && time >=4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// intructions ask to write age >= age not minAge <= age
// so need to change (age >= minAge)
if(minAge <= age) {
// it should be console.log('enter');
  console.log('no entry');
} else {
// it should be console.log('no entry');
  console.log('enter');
}
*/
