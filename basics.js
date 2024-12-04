//Global scope

const fullName = "Minu Nimi";
//Data types
// String => "See on string väärtus", 'See on ka string väärtus', `See on ka string väärtus`
// Number (int, float) => 42, 44.05
// Booloean => true/false, jah/ei, 1/0
// const isMate = true
// Array => [] 
// Object => {}

// const personal = ["Nimi1", "Nimi2", "Nimi3", 43, true, [], {}];

// const everybody = [
//     {},
//     {},
// ]

// const personalData = {
//     name: "Minu Nimi",
//     age: 24,
//     position: "amet"
// };

//Muutujad - nimetus ja väärtus  (NB: Muutumatu vs Muudetav)
//Muutujate nimetus on camelCase and it makes some sense

const fruit = "Banaan"; // Muutuja mida ei saa enam muuta
let model = "BMW"; // Muutuja mida saab veel muuta
model = "Audi";
const nullableVariable = null; // null tähendab, et muutujal ei ole väärtust
const undefindVariable = undefined;

//Koodiblokk => Scope
//Koodiblokki tähistab {} sümbol
//Function Scope - Funktsiooni ulatus
const calculateSum = (number1, number2) => {
    const number3 = 256;
    //console.log(number3);
    //console.log(fullName);
    return number1 + number2;
};

calculateSum(1, 2);


//Type casting
//Muudame number andmetüübi string andmetüübiks
const castNumber = "123456";
//console.log(typeof castNumber);
//console.log(typeof Number(castNumber));
//console.log(Boolean(castNumber));

//Array => sümbol on [], toimub indekseerimine, esimene element on kohal 0
const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"];

// console.log(characters[7]);
// console.log(characters[6]);
// console.log(characters[5]);
// console.log(characters[6]);
// console.log(characters[4]);
// console.log(characters[3]);
// console.log(characters[8]);
// console.log(characters[2]);
// console.log(characters[1]);
// console.log(characters[0]);

//Loopimine => Korduslause ehk igast Array elemendist minnakse üle ja käiakse läbi script
//For Loop

for (i = 0; i < characters.length; i++) {
    console.log("For Loop:", characters[i]);
};

//ForEach Loop

characters.forEach((character) => {
    console.log("ForEach Loop:", character);
});

/**
 * comparison võrdlus
 * == vs === vs object.is()
 * object.is is same thing as ===
 */

// == compares value of both sides. As values they are both equal: 5 or "5"
console.log(5 == "5") //returns true

//=== compares value and data type
console.log(5 === "5") // returns false