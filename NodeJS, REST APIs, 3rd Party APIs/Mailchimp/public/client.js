

// Grabbing the DOM elements
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

// Grabbing the text the user uses as input to send it to the server has a POST request
const formName = form.name.value;
const formEmail = form.email.value;

// Add an event to the submit action
form.addEventListener("submit", e => {

    // Prevent the submit refresh of the page
    e.preventDefault();

    // Using the fetch API to make a POST request sending the name and email of the user
    fetch("/", {
        method: 'POST', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            formName, 
            formEmail
        })})
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.error('Error:', error));
});