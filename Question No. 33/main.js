let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number = 0; number <= numbers.length; number++) {
    let odinalEnding;
    if (number === 1) {
        odinalEnding = "st";
    }
    else if (number === 2) {
        odinalEnding = "nd";
    }
    else if (number === 3) {
        odinalEnding = "rd";
    }
    else {
        odinalEnding = "th";
    }
    console.log(`${number + odinalEnding}`);
}
export {};
