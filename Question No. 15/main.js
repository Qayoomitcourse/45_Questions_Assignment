// Make a list that includes at least three people you’d like to invite to dinner
var guests = ["Shoaib", "Tariq", "Shakeel"];
var unableToAttend = "Tariq";
console.log("Mr. ".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Akhtar";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear Mr. ".concat(guest, ", would you like to join me for dinner?"));
});
