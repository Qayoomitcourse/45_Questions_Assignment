// Store a person’s name in a variable
var personName = "abdul qayoom";
// then print that person’s name in lowercase, uppercase, and titlecase
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
