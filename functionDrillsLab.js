/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/

////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/
//CODE HERE
function helloWrold() {}
helloWrold();

////////////////// PROBLEM 2 ////////////////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE

function jsNinja_1() {
  return "I am a JavaScript ninja!";
}
// console.log(jsNinja_1());

const jsNinja = () => {
  return "...and now I can write arrow functions";
};
// console.log(jsNinja());

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE

//const printName = (myName) => {console.log(myName);}
//printName('David')

////////////////////// ...why does problem #3 exist?  ///////////////
let myName = "David";
const printName = () => {
  // console.log(myName);
};
printName();

////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/
//CODE HERE
const greeting = (name) => {
  // console.log(`Hello ${name}`);
};
greeting("David");

////////////////// PROBLEM 5 ////////////////////
/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE
const compareNums = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(compareNums(4, 6), compareNums(5, 2), compareNums(3, 3));
////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/
//CODE HERE
const add = (num1, num2) => {
  Number(num1);
  Number(num2);
  return num1 + num2;
};
let sum = add(6, 3);
// console.log(sum);
////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaim = function (str) {
  return str.toUpperCase() + "!!!";
};

// console.log('arrow')
// console.log('declaration')
console.log("expression");

////////////////// PROBLEM 8 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaimTwo = (str) => {
  return str.toUpperCase() + "!!!";
};

console.log("arrow");
// console.log('declaration')
// console.log('expression')

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/
const exclaimThree = (str) => {
  console.log(`${str.toUpperCase()}!!!`);
};

exclaimThree("david");
////////////////// PROBLEM 9 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + "!!!";
}

// console.log('arrow')
console.log("declaration");
// console.log('expression')

////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE
const nameCheck = (name1) => {
  if (name1 === "Steven") {
    console.log("What is up, Steven?");
  } else if (name1 === "Brian") {
    console.log("Hey Brian!");
  } else {
    console.log(`Cool name ${name1}`);
  }
};
nameCheck("Steven");
nameCheck("Brian");
nameCheck("george");
////////////////// PROBLEM 11 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

// //CODE HERE
// let faveColor
const faveColorFinder = (str1) => {
  if (str1.toLowerCase() === "red") {
    let faveColor = "red is a great color";
    return faveColor;
  }
  if (str1.toLowerCase() === "green") {
    let faveColor = "green is a solid favorite color";
    return faveColor;
  }
  if (str1.toLowerCase() === "black") {
    let faveColor = "so trendy";
    return faveColor;
  }
};

console.log(faveColorFinder("red"));
// console.log(faveColorFinder("reds"));
// console.log(faveColorFinder("rED"));
// console.log(faveColorFinder("black"));
// console.log(faveColorFinder("green"));
////////////////// PROBLEM 12 ////////////////////
let namesArr = ["Cameron", "Riley", "Eric", "Brenna", "Karl"];
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE
const printAllNames = (arr1) => {
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }
};
printAllNames(namesArr);
////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/

//CODE HERE
const thatsOdd = (num1) => {
  if (num1 % 2 === 0) {
    return "That's not odd!";
  } else {
    return "That is odd indeed!";
  }
};

let oddChecker = thatsOdd(7);
console.log(oddChecker);

////////////////// PROBLEM 14 ////////////////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'
*/

//CODE HERE
const bestMovie = (movieTitle) => {
  return `${movieTitle} is the best movie ever`;
};
console.log(bestMovie("12 Angry Men"));
////////////////// PROBLEM 15 ////////////////////
let bigOrSmallArray = [1, 101, 102, 2, 103, 4, 5, 6, 107];
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/

//CODE HERE

const bigOrSmall = (arr1) => {
  let answers = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 100) {
      answers.push("Big");
    } else {
      answers.push("small");
    }
  }
  return answers;
};
console.log(bigOrSmall(bigOrSmallArray));

////////////////// PROBLEM 16 ////////////////////
let contestants = [
  "Katniss",
  "Peeta",
  "Fox-face",
  "Glimmer",
  "Cato",
  "Rue",
  "Thresh",
  "Clove",
  "Marvel",
];
let loser = "Glimmer";
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE
const theEliminator = (contestants, loser) => {
  for (let i = 0; i < contestants.length; i++)
    if (contestants[i] === loser) {
      contestants.splice(i, 1);
    }
  return contestants;
};
console.log(theEliminator(contestants, loser));
////////////////// PROBLEM 17 ////////////////////
let sampleString = "Hi, my name is Kylo.";
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE
const upperCaser = (string1) => {
 let allCaps = string1.toUpperCase();
  return allCaps;
};
console.log(upperCaser(sampleString));
////////////////// PROBLEM 18 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/

function emailCheck(email) {
let emailString = String(email).trim();
if (emailString.includes("@") === true) {
console.log(`email verified: ${emailString}`);}
else console.log("must provide a valid email address")
} 

emailCheck("       david@gmail.com")
////////////////// PROBLEM 19 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. Each chocolate frog costs 3 gold. Your function should take in a single parameter, which is the amount of gold you are willing to spend. Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of gold you are willing to spend.
*/
let frogPrice = 3;

const buyFrogs = (gold) => {
  return Math.floor(gold / frogPrice);
};
var totalFrogs = buyFrogs(7);
// console.log("frog purchase power =", totalFrogs);

//CODE HERE

////////////////// PROBLEM 20 ////////////////////
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function would return to you 1.3333... However, you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. Re-write the function you used in the previous problem (give it the same name, just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/

//CODE HERE

////////////////// PROBLEM 21 ////////////////////
// let sampleArray1 = [0, 1, 2, 3, 4, 7, 6, 7, 8, 9];
// let sampleArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sampleArray3 = [0, 1, 2, 3];
// let sampleArray4 = [0, 1, 3, 2];
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order. The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/

//CODE HERE

//////////// TEST FOR LOOP//////////


// for (i = 0; i < sampleArray.length - 1; i++) {
//   if (sampleArray[i] < sampleArray[i + 1]) {
//     counter++;
//   }
// }
// if (counter === sampleArray.length - 1) {
// console.log("true");
// }
// else console.log("false");
// console.log(counter);
// console.log(sampleArray.length - 1);
let sampleArray1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sampleArray2 = [0, 1, 2, 3, 4, 5, 800, 7, 8, 9];
let sampleArray3 = [0, 1, 2, 3];
let sampleArray4 = [0, 1, 300, 2];

const ascending1 = (array1, arrayName) => {
  let counter = 0
  for (i = 0; i < array1.length - 1; i++) {
    if (array1[i] < array1[i + 1]) {
      counter++;
    }
  }
  console.log(`counter is ${counter}`);
  if (counter === array1.length -1) {
    console.log(`${arrayName} is ascending`);
  } else {
    console.log(`${arrayName} is not ascending`);
  }
};

ascending1(sampleArray1, "Sample Array 1");
ascending1(sampleArray2, "Sample Array 2");
ascending1(sampleArray3, "Sample Array 3");
ascending1(sampleArray4, "Sample Array 4");
////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = [];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = [];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = [];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = [];

// GitHub: https://github.com/davidjlay2277/functionsLab
