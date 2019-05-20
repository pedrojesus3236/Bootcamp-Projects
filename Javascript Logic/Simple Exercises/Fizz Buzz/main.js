


if (prompt("Run Loop?") === "yes") {

    for (let i = 1; i < 41; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            alert ("Hey Yo");   

        } else if (i % 5 === 0 ) {

            alert ("Yo");

        } else if (i % 3 === 0) {

            alert ("Hey");

        } else {

            alert (i);

        }

    }

}