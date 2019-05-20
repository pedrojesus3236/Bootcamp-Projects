

let para = document.getElementsByTagName("p");

for (let i = 0; i < para.length; i++) {

    para[i].style.color = random_rgb();
}

function random_rgb() {

    let o = Math.round;
    let r = Math.random;
    let s = 255;

    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}