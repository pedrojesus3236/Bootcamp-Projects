


const form = document.getElementsByClassName("form")[0];
const input = document.getElementById("mainInput");

form.addEventListener("submit", function (e) {
    
    e.preventDefault();
    
    // Redirect to another page after submiting the form
    window.location = `/s/${input.value}/all`;
});