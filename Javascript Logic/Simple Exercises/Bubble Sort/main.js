

let numbers = [];

for (let i = 0; i < 3; i++) {

    let question = Number(prompt("What number do you want"));
    numbers.push(question);
}

let done = false;

while (!done) {
  
  done = true;

  for (let i = 1; i < numbers.length; i++) {

    if    (numbers[i - 1] < numbers[i]) {

      done = false;
      let tmp = numbers[i - 1];
      numbers[i - 1] = numbers[i];
      numbers[i] = tmp;
    }
  }
}
 

alert("The order is " + numbers.join(", "));
