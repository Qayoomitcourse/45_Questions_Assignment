// If you haven’t received an array index error in one of your programs yet, try to make one happen
// let newArry : string[] = ["Asif", "Sajid", "Adnan", "Waheed"]
// console.log(`Index No. ${newArry[4]}`); // intentional error due to arry arry are zero-indexed
// // Correct the error before finishing.
// console.log(`Index No. ${newArry[3]}`); 
var friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
