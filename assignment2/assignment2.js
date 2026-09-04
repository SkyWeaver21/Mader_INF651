/*
Name: Jacob Mader
Date: 9/4/2026
Program: Assignment 2 - JavaScript Basics
*/

// 1. Variables and Data Types
console.log("===== 1. Variables and Data Types =====");

let personName = "John Smith";
let age = 21;
let isStudent = true;

console.log(personName, typeof personName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);


// 2. Basic Arithmetic Operations
console.log("\n===== 2. Basic Arithmetic Operations =====");

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);


// 3. Working with Strings
console.log("\n===== 3. Working with Strings =====");

let sentence = "JavaScript is fun to learn.";

console.log("Length:", sentence.length);
console.log("First Character:", sentence.charAt(0));
console.log("Last Character:", sentence.charAt(sentence.length - 1));


// 4. Math Object
console.log("\n===== 4. Math Object =====");

let negativeNumber = -16;

console.log("Square Root of Absolute Value:", Math.sqrt(Math.abs(negativeNumber)));
console.log("Number Squared:", Math.pow(negativeNumber, 2));
console.log("Absolute Value:", Math.abs(negativeNumber));


// 5. Comparison Operators
console.log("\n===== 5. Comparison Operators =====");

let firstNumber = 15;
let secondNumber = 10;

console.log("Greater Than:", firstNumber > secondNumber);
console.log("Less Than:", firstNumber < secondNumber);
console.log("Equal To:", firstNumber === secondNumber);


// 6. Logical Operators
console.log("\n===== 6. Logical Operators =====");

let isLoggedIn = true;
let hasPermission = false;

console.log("AND (&&):", isLoggedIn && hasPermission);
console.log("OR (||):", isLoggedIn || hasPermission);
console.log("NOT (!isLoggedIn):", !isLoggedIn);


// 7. Template Literals
console.log("\n===== 7. Template Literals =====");

let firstName = "John";
let lastName = "Smith";

let greeting = `Hello, ${firstName} ${lastName}! Welcome to JavaScript.`;

console.log(greeting);
