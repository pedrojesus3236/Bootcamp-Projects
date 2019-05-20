
let firstParagraph = document.getElementsByClassName("firstp");
let secondParagraph = document.getElementsByClassName("secondp");
firstParagraph[0].style.color = "red";

function changeColor() {

    if (firstParagraph[0].style.color === "red") {

        firstParagraph[0].style.color = "black";
        secondParagraph[0].style.color = "red"; 
    } else {

        firstParagraph[0].style.color = "red";
        secondParagraph[0].style.color = "black";
    }
}

setInterval(changeColor, 1000);