// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples
var favoriteTransport = ["Suzuki Jeep", "Honda Motorcycle", "Toyota Car ", "Toyota Parado"];
for (var _i = 0, favoriteTransport_1 = favoriteTransport; _i < favoriteTransport_1.length; _i++) {
    var transport = favoriteTransport_1[_i];
    console.log("I would like to own a ".concat(transport));
}
console.log("\n\n");
favoriteTransport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport));
});
