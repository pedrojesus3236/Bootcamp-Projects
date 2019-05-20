

let question = prompt("Insert the sequence you want to encrypt/decrypt");
let cipherText = "";


if (question === question.toUpperCase() && question === question.split(" ").join("") && /^[^/\\()~!@#$%^&*{«»„““”‘’|\n\t….,;`^"<>'}+:?®©]*$/.test(question)) {

    for (let i = 0; i < question.length; i++) {
        
        if (question.charCodeAt(i) > 64 && question.charCodeAt(i) < 78) {

            cipherText += String.fromCharCode(question.charCodeAt(i) + 13);
        } else {

            cipherText += String.fromCharCode(question.charCodeAt(i) - 13);
        }

    }

    alert(cipherText);

} else {

    alert("We only accept capital letters A - Z");
}