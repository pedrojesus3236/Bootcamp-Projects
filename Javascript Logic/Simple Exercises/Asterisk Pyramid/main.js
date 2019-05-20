


let width = parseInt(prompt("What is the width of the tree?"));

let asterisk = "*"
let whitespaceCount = 0;
let row = " ";
let whitespace = " ";

for(i = 0; i < width / 2; i++) {

    // Calculate whitespace for each Row
    whitespaceCount = width - asterisk.length;

    // Create row by concatenating half of whitespace in each side and the asterisks in the center
    row = whitespace.repeat(whitespaceCount / 2) + asterisk + whitespace.repeat(whitespaceCount / 2);

    // Create next loop's asterisks
    asterisk += "**";

    alert(row);
}


function printRow(rowString) {
    var node = document.createElement("pre");           	 
    var textnode = document.createTextNode(rowString);
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node);
}