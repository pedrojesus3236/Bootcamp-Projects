


let question = prompt("Do you want to run fibonacci?");
let number1 = 1;
let number2 = 0;
let temp = 0;


if (question === "yes") {

    for (let i = 0; i < 60; i++) {

        temp = number1;
        number1 += number2;
        number2 = temp;

        alert(number2);
    }
}