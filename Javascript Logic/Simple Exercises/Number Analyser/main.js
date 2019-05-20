

let sequence = prompt("Insert the sequence");
let result = "";


for (let i = 0; i < sequence.length; i++) {

     if (sequence[i] % 2 == 0 && sequence[i + 1] % 2 == 0) {
        
        result += sequence[i] + "-";
         
     } else if (sequence[i] % 2 !== 0 && sequence[i + 1] % 2 !== 0) { 

        result += sequence[i] + "#";

     } else {

        result += sequence[i];

     }
}


if (result.endsWith("#" || "-")) {

    alert(result.slice(0, -1));
} else {

    alert(result);
}










  