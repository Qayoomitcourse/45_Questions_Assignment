// Make a list that includes at least three people you’d like to invite to dinner

let guests :string[] = ["Shoaib", "Tariq", "Shakeel"] ; 


console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Akhtar");
guests.splice(guests.length / 2, 0, "Adnan");
guests.push("Basharat");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
