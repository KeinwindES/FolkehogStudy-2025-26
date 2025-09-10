// Get html elements from html using their id
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const button5 = document.getElementById("btn-5");
const button6 = document.getElementById("btn-6");
const button7 = document.getElementById("btn-7");
const button8 = document.getElementById("btn-8");
const button9 = document.getElementById("btn-9");

// BUTTON LOGIC:

//  BUTTON 1
// Example click logic of button 1
let clicked = 0; // A variable to store data.
button1.addEventListener("click", (event) => {
  // Console logs to browser console
  console.log("button 1 clicked", event.target);

  // Example action
  // increases the js variable by 1
  clicked = clicked + 1;
  // change the buttons content to display the number
  button1.innerHTML = "Button 1 <br> clicked " + clicked + " times";
});

button2.addEventListener("click", (event) => {});

button3.addEventListener("click", (event) => {});

button4.addEventListener("click", (event) => {});

button5.addEventListener("click", (event) => {});

button6.addEventListener("click", (event) => {});

button7.addEventListener("click", (event) => {});

button8.addEventListener("click", (event) => {});

button9.addEventListener("click", (event) => {});
