
let userName : string[] = ["Admin", "Qayoom", "Munawar", "Saleem", "Farhan", "Kamran"]

userName = []

if (userName.length == 0){
    console.log("We need to find some users!");
    
} else {
    
userName.forEach(user => {
    if (user == "Admin"){
        console.log("Hello Admin, would you like to see a status report.")
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
})

}
