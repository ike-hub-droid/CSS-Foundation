const changeButton = document.querySelector("#change-btn");
const message = document.querySelector("#message");

changeButton.addEventListener("click", () => {
    // change the paragraph here
    message.textContent = "Message changed!";
});

const toggleButton = document.querySelector("#toggle-btn");
toggleButton.addEventListener("click", () => {
    // toggle the class here
    message.classList.toggle("message");
});

let count = 0; 
const counter = document.querySelector("#counter");
const countButton = document.querySelector("#count-btn");
countButton.addEventListener("click", () => {
    // increase count
    // update the paragraph
    counter.textContent = ++count;
});
