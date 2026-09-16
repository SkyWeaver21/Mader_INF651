"use strict";

// ==========================================
// Challenge 1 - Type Conversion
// ==========================================
 
let numberString = "25";

let convertedNumber = Number(numberString);

console.log("Original value:", numberString);
console.log("Original data type:", typeof numberString);

console.log("Converted value:", convertedNumber);
console.log("Converted data type:", typeof convertedNumber);

console.log("Converted number + 10:", convertedNumber + 10);

// What I understood:
// Number() converts a value stored as a string into an actual number.
// After converting the string, I can perform mathematical operations such as adding 10.


// ==========================================
// Challenge 2 - Type Coercion
// ==========================================

let stringNumber = "15";
let regularNumber = 5;

let additionResult = stringNumber + regularNumber;
let subtractionResult = stringNumber - regularNumber;
let multiplicationResult = stringNumber * regularNumber;

console.log("Addition:", additionResult);
console.log("Addition data type:", typeof additionResult);

console.log("Subtraction:", subtractionResult);
console.log("Subtraction data type:", typeof subtractionResult);

console.log("Multiplication:", multiplicationResult);
console.log("Multiplication data type:", typeof multiplicationResult);

// What I understood:
// JavaScript automatically converts values in some mathematical operations.
// The + operator combines the string and number as a string, while - and * convert the string to a number.


// ==========================================
// Challenge 3 - True and False Values
// ==========================================

let nonEmptyString = "Hello";
let emptyString = "";
let zeroValue = 0;
let positiveNumber = 42;
let nullValue = null;
let undefinedValue = undefined;

console.log("Non-empty string:", Boolean(nonEmptyString));
console.log("Empty string:", Boolean(emptyString));
console.log("Zero:", Boolean(zeroValue));
console.log("Positive number:", Boolean(positiveNumber));
console.log("Null:", Boolean(nullValue));
console.log("Undefined:", Boolean(undefinedValue));

// What I understood:
// Boolean() converts values into either true or false based on whether they are truthy or falsy.
// Non-empty strings and positive numbers are truthy, while empty strings, 0, null, and undefined are falsy.


// ==========================================
// Challenge 4 - if/else
// ==========================================

let ageOne = 20;

if (ageOne >= 18) {
    console.log("Age:", ageOne);
    console.log("You are eligible.");
} else {
    console.log("Age:", ageOne);
    console.log("You are not eligible yet.");
}

let ageTwo = 16;

if (ageTwo >= 18) {
    console.log("Age:", ageTwo);
    console.log("You are eligible.");
} else {
    console.log("Age:", ageTwo);
    console.log("You are not eligible yet.");
}

// What I understood:
// An if/else statement checks whether a condition is true or false.
// When the age is 18 or older, the if block runs; otherwise, the else block runs.


// ==========================================
// Challenge 5 - else if
// ==========================================

let scoreOne = 95;
let scoreTwo = 84;
let scoreThree = 72;

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Score:", scoreOne, "Grade:", getGrade(scoreOne));
console.log("Score:", scoreTwo, "Grade:", getGrade(scoreTwo));
console.log("Score:", scoreThree, "Grade:", getGrade(scoreThree));

// What I understood:
// An else if statement allows a program to check several different conditions in order.
// The first condition that is true determines which grade is returned.


// ==========================================
// Challenge 6 - switch
// ==========================================

let service = "library";

switch (service) {
    case "library":
        console.log("The library can help you find books and research materials.");
        break;

    case "tutoring":
        console.log("Tutoring services can help you with your coursework.");
        break;

    case "parking":
        console.log("The parking office can help with parking permits and questions.");
        break;

    case "technology":
        console.log("Technology services can help with computers and technical problems.");
        break;

    default:
        console.log("That campus service was not found.");
}

service = "tutoring";

switch (service) {
    case "library":
        console.log("The library can help you find books and research materials.");
        break;

    case "tutoring":
        console.log("Tutoring services can help you with your coursework.");
        break;

    case "parking":
        console.log("The parking office can help with parking permits and questions.");
        break;

    case "technology":
        console.log("Technology services can help with computers and technical problems.");
        break;

    default:
        console.log("That campus service was not found.");
}

service = "cafeteria";

switch (service) {
    case "library":
        console.log("The library can help you find books and research materials.");
        break;

    case "tutoring":
        console.log("Tutoring services can help you with your coursework.");
        break;

    case "parking":
        console.log("The parking office can help with parking permits and questions.");
        break;

    case "technology":
        console.log("Technology services can help with computers and technical problems.");
        break;

    default:
        console.log("That campus service was not found.");
}

// What I understood:
// A switch statement compares one value against several possible cases.
// The break statement stops the switch after a matching case, while default handles unknown values.


// ==========================================
// Challenge 7 - Ternary Operator
// ==========================================

let isLoggedIn = true;

let loginMessage = isLoggedIn
    ? "Welcome back!"
    : "Please log in.";

console.log(loginMessage);

isLoggedIn = false;

loginMessage = isLoggedIn
    ? "Welcome back!"
    : "Please log in.";

console.log(loginMessage);

// What I understood:
// The ternary operator is a shorter way to make a simple true-or-false decision.
// If isLoggedIn is true, the first message is displayed; otherwise, the second message is displayed.


// ==========================================
// Challenge 8 - Student Status Program
// ==========================================

let studentName = "Jordan Miller";
let studentAge = 21;
let studentScore = 87;
let studentMajor = "Computer Science";
let enrollmentStatus = true;

let studentAdult;

if (studentAge >= 18) {
    studentAdult = "Yes";
} else {
    studentAdult = "No";
}

let studentGrade;

if (studentScore >= 90 && studentScore <= 100) {
    studentGrade = "A";
} else if (studentScore >= 80) {
    studentGrade = "B";
} else if (studentScore >= 70) {
    studentGrade = "C";
} else if (studentScore >= 60) {
    studentGrade = "D";
} else {
    studentGrade = "F";
}

let studentStatus = enrollmentStatus
    ? "Enrolled"
    : "Not Enrolled";

let studentSummary = `
Student: ${studentName}
Age: ${studentAge}
Major: ${studentMajor}
Adult: ${studentAdult}
Score: ${studentScore}
Grade: ${studentGrade}
Status: ${studentStatus}
`;

console.log(studentSummary);

// What I understood:
// This program combines if/else, else if, the ternary operator, and template literals.
// These decision statements can work together to create a program that evaluates student information and produces a useful summary.


// ==========================================
// Challenge 9 - Strict Mode
// ==========================================

// "use strict"; is placed at the top of this file.
// Strict mode helps JavaScript identify certain coding mistakes and prevents some unsafe behaviors.

// What I understood:
// Strict mode makes JavaScript follow stricter rules when running the program.
// Putting "use strict"; at the beginning of the file helps catch certain errors that might otherwise go unnoticed.
