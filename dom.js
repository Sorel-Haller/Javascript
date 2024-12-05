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

function renderList() {
    fruitListContainer.innerHTML = "";
    const orderedListElement = document.createElement("ol");
    
    for(let i = 0; i < fruits.length; i++) {
        const listElement = document.createElement("li");

        const spanElement = document.createElement("span");
        spanElement.innerText = fruits[i];

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "🗑";
        deleteButton.classList.add("delete-btn");

        listElement.appendChild(spanElement);
        listElement.appendChild(deleteButton);

        orderedListElement.appendChild(listElement); 
    }    

    fruitListContainer.appendChild(orderedListElement);
};

renderList();


/**
 * EVENT-DRIVEN
 * meie tegevused sõltuvad kasutaja tagasisidest
 */

const dontTouchMeButton = document.querySelector("#dont-touch-me-button");

dontTouchMeButton.addEventListener("click", (event) => {
    console.log(event)
    alert("Ei tohtinud ju.");
});


const addNewFruitForm = document.querySelector("#add-new-fruits-form");
addNewFruitForm.addEventListener("submit", () => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const fruitInput = formData.get("fruit");
    console.log(fruitInput);

    if(!fruitInput.trim()) return;
    //Kui kõik hästi

    fruits.push(fruitInput);
    renderList();

    event.target.reset();
});