let validEmail = prompt("Insert a valid email");

validEmail = validEmail.trim();

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validEmail)) {

    alert("The email is valid, proceed with the email:" + validEmail);
} else {

    alert("Please insert a valid email");  
}

