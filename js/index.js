// console.log("Sanity check");

// Grab a reference to an element of the page
const mainElement = document.querySelector('[data-js="main"]');

const myLoggingButton = document.querySelector('[data-js="logging-button"]');
const addColorButton = document.querySelector('[data-js="add-color"]');
const removeColorButton = document.querySelector('[data-js="remove-color"]');
const toggleColorButton = document.querySelector('[data-js="toggle-color"]');

console.log(toggleColorButton);
// we can add or remove classes to elements

// mainElement.classList.add("dark");
// mainElement.classList.remove("main");

// add event listener to an element

myLoggingButton.addEventListener("click", () => {
  console.log("clicked on a button");
});

addColorButton.addEventListener("click", () => {
  mainElement.classList.add("dark");
  // mainElement.classList.add("pete");
  // mainElement.classList.add("canoes");
});

removeColorButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
