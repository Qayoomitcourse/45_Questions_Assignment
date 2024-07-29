function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(option => {
        let [key, value] = option.split();
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};
