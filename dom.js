/**
 * DOM API
 * Kuidas javascripti HTMLi manipuleerimiseks
 * saab kasutada HTML dokumente, kuhu on seatud see js fail
 */

const h1Element = document.querySelector("h1");
h1Element.innerText = "Head teed!"

 /**
  * HTML
  * <ol>
  *     <li>
  *     <li>
  *     <li>
  *     <li>
  * </ol>
  */
const fruits = ["Apple" , "Orange", "Banana", "Mango", "Kiwi"];
const fruitListContainer = document.querySelector("#fruit-list");

const orderedListElement = document.createElement("ol");

for(let i = 0; i < fruits.length; i++) {
    const listElement = document.createElement("li");
    listElement.innerText = fruits[i];
    orderedListElement.appendChild(listElement);
    
}

fruitListContainer.appendChild(orderedListElement);

/**
 * EVENT-DRIVEN
 * meie tegevused sõltuvad kasutaja tagasisidest
 */

const dontTouchMeButton = document.querySelector("#dont-touch-me-button");

dontTouchMeButton.addEventListener("click", () => {
    console.log(event)
    alert("Ei tohtinud ju.");
});