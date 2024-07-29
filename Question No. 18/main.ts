// Store the locations in an array. Make sure the array is not in alphabetical order.
let placesToVisit = ["Japan", "Australia", "Italy", "Brazil", "Canada"];

// Print your array in its original order.
console.log("Original array:", placesToVisit);

// Print your array in alphabetical order without modifying the actual list.
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical order (without modifying original):", alphabeticalOrder);

// Show that your array is still in its original order by printing it.
console.log("Original array after alphabetical order print:", placesToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
let reverseAlphabeticalOrder = [...placesToVisit].sort().reverse();
console.log("Reverse alphabetical order (without changing original):", reverseAlphabeticalOrder);

// Show that your array is still in its original order by printing it again.
console.log("Original array after reverse alphabetical order print:", placesToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Array after reversing the order:", placesToVisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Array after reversing the order again:", placesToVisit);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Array sorted in alphabetical order:", placesToVisit);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort().reverse();
console.log("Array sorted in reverse alphabetical order:", placesToVisit);
