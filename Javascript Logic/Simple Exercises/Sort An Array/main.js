let people = [];
let question = "";


function verify(question) {

    if (question == "terminate*") {

        return false;

    } else {

        return true;
    }
}



while (true) {

    let object = {};

    question = prompt("What is the name");
    if (!verify(question)) {

        break;
    } else {

        object.name = question
    }

    question = Number(prompt("What is the age"));
    if (!verify(question)) {

        break;
    } else {

        object.age = question
    }

    question = prompt("What is the profession");
    if (!verify(question)) {

        break;

    } else {
        object.profession = question
    }

    people.push(object);
}

let done = false;

while (!done) {

    done = true;

    for (let i = 1; i < people.length; i++) {

        if (people[i - 1].age > people[i].age) {

            done = false;
            let tmp = people[i - 1];
            people[i - 1] = people[i];
            people[i] = tmp;
        }
    }
}




let result = "";

for (let i = 0; i < people.length; i++) {

    result += people[i].name + " - " + people[i].age + ", ";

}




if (people.length === 0) {

    alert("You did not insert any person in the list");
    alert("Goodbye");

} else {

    if (result.endsWith(" ")) {

        alert("list: " + result.slice(0, -2));
        alert("Goodbye");

    } else {

        alert("list: " + result);
        alert("Goodbye");
    }
}