//Problem 1
//Write an arrow function that checks to see if a user is older than 18.

const checkAge = (age) => age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(checkAge(20));
console.log(checkAge(16));


//Problem 2
//Write an arrow function that checks to see if it is currently raining.

const isRaining = (raining) => raining ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(isRaining(true));
console.log(isRaining(false));


//Problem 3
//Write an arrow function that checks to see if a number is even.

const isEven = (num) => num % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(isEven(4));
console.log(isEven(7));


//Problem 4
//Write an arrow function that takes in two parameters and checks whether one number is greater than another.

const compareNumbers = (num1, num2) => 
    num1 > num2 ? `${num1} is more than ${num2}!` : `${num1} is less than ${num2}!`;

console.log(compareNumbers(10, 5));
console.log(compareNumbers(3, 8));

