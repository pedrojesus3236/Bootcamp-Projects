
let students = [];
let studentCounter = Number(prompt("How many students does the class have?"));

for (let i = 0; i < studentCounter; i++) {

    let object = {};
    object.name = prompt("What is the student's name?");
    object.grade = Number(prompt("What is the student's grade?"));
    students.push(object);
}


let sum = Number(0);

for(i = 0; i < studentCounter; i++) {

    sum += students[i].grade;
}

let avg = sum / studentCounter;

let studentName = prompt("Please select a student");
let found = false;
let difference = Number(0);

for (let i = 0; i < studentCounter; i++) {

    if (studentName === students[i].name) {
        difference = students[i].grade - avg;
        found = true;
    }
}

let variation = parseInt(difference * 100 / avg);


if (found) { 
      
     if (variation > 0) {
        alert(studentName + " variation from average is +" + variation + "%");
    } else {
        alert(studentName + " variation from average is " + variation + "%");
    }
}

if (!found) {
    alert("Sorry, we don’t have that student listed");
}
