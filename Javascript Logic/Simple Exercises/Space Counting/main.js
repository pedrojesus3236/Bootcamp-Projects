

let answer = prompt("Spit a sentence");
let counter = 0;

for (let i = 0; i < answer.length; i++) {
    if (answer[i] === " ") {
        counter++;
    }
}

alert("That sentence has " + counter + " spaces");