

let question = prompt("Insert a sequence");
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < question.length; i++) {
    
    array[question[i]]++;

}

alert("List of numbers:");
for (let j = 0; j < array.length; j++) {

    if (array[j] > 0) {

        alert(j + ": " + array[j] + " times");
    }
}