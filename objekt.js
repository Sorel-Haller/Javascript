/**
 * OBJEKTS
 * Objekti tähistab {} koodibloki märgend
 * Objekt on asi, millel on iseloomulikud tunnused
 * Objekt koosneb key:value
 * Objekti seest saame väärtust välja kutsuda kastades punkti ning keyd.
 */

const car = {
    brand: "Kia",
    model: "Proceed",
    year: 2024,
    isElectric: false,
    drive: function(){
        console.log("Drive please!")
    }
};
console.log(car.year);

const porche = new car()

console.log("Porche".toUpperCase());

/**
 * typeof operant
 * Annab teada, mis andmetüüp on muutuja sisse salvestatud
 */
const harrypotter = 4;
console.log(typeof harrypotter)