

// Declaring variables

let rgbCode = document.getElementById("rgbCode");
let square = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetColorsButton = document.querySelector("#resetColors");
let easyDifficulty = document.querySelector("#easyDifficulty");
let hardDifficulty = document.querySelector("#hardDifficulty");


let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();


// Easy difficulty event listener

easyDifficulty.addEventListener("click", function(){

    hardDifficulty.classList.remove("selected");
    easyDifficulty.classList.add("selected");

    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbCode.textContent = pickedColor;

    for(let i = 0; i < square.length; i++) {

        if (colors[i]) {

        square[i].style.background = colors[i];

        } else {

        square[i].style.display = "none";
        }
    }
});


// Hard difficulty event listener

hardDifficulty.addEventListener("click", function(){

    easyDifficulty.classList.remove("selected");
    hardDifficulty.classList.add("selected");

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbCode.textContent = pickedColor;

    for(let i = 0; i < square.length; i++) {

        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }
});


// Reset all the colours event listener

resetColorsButton.addEventListener("click", function(){
  
    colors = generateRandomColors(numSquares);
  
    pickedColor = pickColor();
  
    rgbCode.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
  
    for (let i = 0; i < square.length; i++) {

        square[i].style.background = colors[i];
    }

    h1.style.background = "rgb(70, 133, 185)";
})



// Square interaction and end game 

rgbCode.textContent = pickedColor;

for(let i = 0; i < square.length; i++) {
  
    square[i].style.background = colors[i];
  
    square[i].addEventListener("click", function() {
    
    let clickedColor = this.style.background;
    
    if (clickedColor === pickedColor) {

        messageDisplay.textContent = "Correct!";
        resetColorsButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;

    } else {

        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
        }
    })
}





// Auxiliary functions

function changeColors(color){
  
    for (let i = 0; i < square.length; i++) {
        
        square[i].style.background = color;
    }

}

function pickColor(){

    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(num){
  
  let arr = []
  
  for (let i = 0; i < num; i++) {

    arr.push(randomColor())
  }
  
  return arr;
}

function randomColor(){

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return "rgb(" + r +", " + g + ", " + b +")";
}