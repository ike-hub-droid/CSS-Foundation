console.log("JavaScript is connected!");
const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const output = document.querySelector("#output");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    console.log(name);

    if (name === "" || email === "") {
        output.textContent = "Please fill in all fields.";
    } else {
        output.textContent = `Thanks, ${name}! We'll email you at ${email}`;
    }
});