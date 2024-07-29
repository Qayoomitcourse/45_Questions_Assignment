function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
function make_tshirt(size = "large", message = "I Love Typescript") {
    console.log(`Making a  ${size} T-Shirt with the message ${message} printed on it`);
}
make_tshirt();
make_tshirt("Medium");
make_tshirt("Small", "I Love Javascript");
export {};
