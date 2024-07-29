let magicians = ["Magician1", "Magician2", "Magician3"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(name => `${name} the Great`);
}
let greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
export {};
