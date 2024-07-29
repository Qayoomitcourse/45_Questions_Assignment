
let current_users : string[] = ["Farhan", "Qayoom", "Munawar", "Saleem",  "Kamran"]

let new_users : string[] = ["Asif", "Mohabat", "qayoom", "Razzak",  "farhan"]

new_users.forEach(new_one_user => {
    let userCondition = current_users.some(currentUser => currentUser.toLocaleLowerCase() == new_one_user.toLocaleLowerCase())
    if (userCondition) {
        console.log(`${new_one_user} will need to enter a new username!`);
        
    } else {
        console.log(`the User Name ${new_one_user} is available`);
        
    }
})





