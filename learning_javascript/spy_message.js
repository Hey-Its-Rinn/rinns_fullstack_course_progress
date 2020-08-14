var firstName = prompt("Enter your first name: ")
var lastName = prompt("Enter you last name: ")
var age = prompt("Enter your age: ")
var height = prompt("Enter your height in cm: ")
var petName = prompt("Enter your pet's name: ")


if (firstName[0] === lastName[0]) {
    if (20 < age < 30 && height >= 170) {
        if (petName[petName.length - 1] === "y") {
            console.log("The dog ate the other computer.")
        }
    }
}