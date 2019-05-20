

let question = prompt("Hi, do you want to use the calculator");

if (question === "yes") {

    let operation = prompt("What kind of math operation do you want ?");
    

    if (operation === "log" || operation === "cos") {
        
        let singleValue = prompt("What value do you want?");

        if (operation == "log") {

            alert("The result of your operation is " + Math.log(singleValue).toFixed(3));
            alert("Thank you for using this calculator");
        } else {

            alert("The result of your operation is " + Math.cos(singleValue).toFixed(3));
            alert("Thank you for using this calculator");
        }


    } else if (operation === "+") {
        
        let dualValue1 = Number(prompt("What value do you want?"));
        let dualValue2 = Number(prompt("What value do you want?"));
        let calculation = dualValue1 + dualValue2;

        alert("The result of your operation is " + Number(calculation));
        alert("Thank you for using this calculator");

    } else if (operation === "-") {

        let dualValue1 = Number(prompt("What value do you want?"));
        let dualValue2 = Number(prompt("What value do you want?"));
        let calculation = dualValue1 - dualValue2;

        alert("The result of your operation is " + Number(calculation));
        alert("Thank you for using this calculator");

    } else if (operation === "*") {

        let dualValue1 = Number(prompt("What value do you want?"));
        let dualValue2 = Number(prompt("What value do you want?"));
        let calculation = dualValue1 * dualValue2;

        alert("The result of your operation is " + Number(calculation));
        alert("Thank you for using this calculator");

    } else if (operation === "/") {

        let dualValue1 = Number(prompt("What value do you want?"));
        let dualValue2 = Number(prompt("What value do you want?"));
        let calculation = dualValue1 / dualValue2;

        alert("The result of your operation is " + Number(calculation));
        alert("Thank you for using this calculator");

    } else if (operation === "%") {

        let dualValue1 = Number(prompt("What value do you want?"));
        let dualValue2 = Number(prompt("What value do you want?"));
        let calculation = dualValue1 % dualValue2;

        alert("The result of your operation is " + Number(calculation));
        alert("Thank you for using this calculator");

    } else {

        alert("We're sorry but we don't have that operation");
    }



} else if (question === "no") {

    alert("See you later alligator");

} else {

    alert("We don't understand what you mean dawg, say yes or no please");

}

