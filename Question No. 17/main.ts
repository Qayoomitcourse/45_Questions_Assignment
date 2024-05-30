// Make a list that includes at least three people you’d like to invite to dinner

let guests :string[] = ["Shoaib", "Tariq", "Shakeel"] ; 


// console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Akhtar");
guests.splice(guests.length / 2, 0, "Adnan");
guests.push("Basharat");

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list