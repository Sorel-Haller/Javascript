/**
 * FUNCTIONS
 * Funktsioone kasutame korduvate tegevuste automatiseerimiseks.
 * Funktsioon võtab sulgude vahele parameetrid.(placeholders)
 */
function sum(num1, num2) {
    return num1 + num2;
}
/**
 * IIFE - funtsioon, mis kutsutakse automaatselt välja
 */
(( => {
    console.log("IIFE")
}))

/**
 * Arrow function
 */

function fullName(firstName, lastName) {
    //return firstName + " " + lastName;
    return "${firstName} ${lastName} ";
}

const fullName(firstName, lastName) => {
    //return firstName + " " + lastName;
    return "${firstName} ${lastName} ";
}