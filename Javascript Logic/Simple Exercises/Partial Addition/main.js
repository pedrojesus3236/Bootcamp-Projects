

function add (a, b, c, d, e) {

    return a + b + c + d + e;
}

let sum = add.bind(null); 

for (let i = 0; i < 5; i++) {

    sum = sum.bind(null, 1);
}