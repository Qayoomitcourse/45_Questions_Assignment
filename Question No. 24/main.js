"use strict";
// Conditional Tests: 
// Equality with strings
let Apple = "apple";
console.log(`Apple is equal to apple: ${Apple == Apple} `); // True
console.log(`Apple is not equal to apple: ${Apple !== Apple} `);
// Tests using the lower case function
console.log(` Apple is equal to apple after converting into lower case: ${Apple.toLowerCase() == "apple"} `); // True
console.log(` Apple is not equal to apple after converting into lower case: ${Apple.toLowerCase() !== "apple"} `); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a = 5;
let b = 10;
console.log(`Numerical test of equality, ${a} is not equal to ${b} : ${a != b}`); //true 
console.log(`Numerical test of inequality, ${a} is equal to ${b} :  ${a == b}`); //false 
console.log(`Numerical test of greater than, ${b} is greater than ${a}:  ${b > a}`); //true 
console.log(`Numerical test of greater than, ${b} is not greater than ${a}:  ${b > a}`); //false 
console.log(`Numerical test of less than, ${a} is less than ${b}:  ${a < b}`); //true 
console.log(`Numerical test of greater than or equal to, ${b} >= ${a}: ${b >= a}`); //true
console.log(`Numerical test of less than or equal to, ${a} <= ${b}: ${a <= b}`); //true
// and operator
console.log(`And Operator Test (5 > 3) && (2 < 4): ${(5 > 3) && (2 < 4)}`); // True
console.log(`And Operator Test (5 > 3) && (2 > 4): ${(5 > 3) && (2 > 4)}`); // False
// or operator
console.log(`Or operator Test (5 > 3) || (2 > 4): ${(5 > 3) || (2 > 4)}`); // True
console.log(`(Or operator Test (1 > 3) || (2 > 4): ${(1 > 3) || (2 > 4)}`); // False
// Test whether an item is in a array
const fruits = ["apple", "banana", "Mango"];
console.log(`Banana is in my Fruits Arry: ${fruits.includes("banana")}`); // True
console.log(`Mango is not in my Fruits Arry: ${!fruits.includes("Mango")}`); // False
