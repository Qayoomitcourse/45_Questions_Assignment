// Make a list that includes at least three people you’d like to invite to dinner

let guests :string[] = ["Shoaib", "Tariq", "Shakeel"] ; 


let unableToAttend = "Tariq";
console.log(`Mr. ${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Akhtar";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear Mr. ${guest}, would you like to join me for dinner?`);
});