// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples

let favoriteTransport :string[] = ["Suzuki Jeep", "Honda Motorcycle", "Toyota Car ", "Toyota Parado"] ; 

for (const transport of favoriteTransport) {
    console.log(`I would like to own a ${transport}`);
    
}
console.log("\n\n");
favoriteTransport.forEach(transport => {
    console.log(`I would like to own a ${transport}`);
});