let authorName = prompt("What is your name");

let answer = prompt("Do you want to leave a quote for humanity to reflect upon such wisdom?");

if (answer === "yes") {

    let counter = prompt("How many words does your quote has?");

    let words = [];

    alert("Tell me your quote word by word");

    for (let i = 0; i < counter; i++) {

        words.push(prompt());
    }

    alert("Your quote is: '" + words.join(" ") + ".' - " + authorName);

} else if (answer === "no") {

    alert("See you next time, humanity will surely lost...");

} else {

    alert("We only accept yes or no as an answer");

}