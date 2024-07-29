
let alien_colour = "green";
console.log("====First Version====");

if (alien_colour === "green") {
    console.log("The Player earned 5 points.");
} else if (alien_colour === "yellow") {
    console.log("The Player earned 10 points.");
} else if (alien_colour === "red") {
    console.log("The Player earned 15 points.");
}

console.log("====Second Version====");
alien_colour = "yellow";
if (alien_colour === "green") {
    console.log("The Player earned 5 points.");
} else if (alien_colour === "yellow") {
    console.log("The Player earned 10 points.");
} else if (alien_colour === "red") {
    console.log("The Player earned 15 points.");
}

console.log("====Third Version====");
alien_colour = "red";
if (alien_colour === "green") {
    console.log("The Player earned 5 points.");
} else if (alien_colour === "yellow") {
    console.log("The Player earned 10 points.");
} else if (alien_colour === "red") {
    console.log("The Player earned 15 points.");
}
