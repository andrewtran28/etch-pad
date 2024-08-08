//Global Variables
const canvas = document.querySelector(".canvas");
const btn_resize = document.querySelector(".resize");
const btn_clear = document.querySelector(".clear");
const btn_normal = document.querySelector(".normal");
const btn_erase = document.querySelector(".erase");
const btn_randomize = document.querySelector(".random");

let inputSize = 16;
let brush = 0;

function createGrid (SQUARES_PER_SIZE) {
    const SQUARE_SIZE = 720 / SQUARES_PER_SIZE;
    const TOTAL_SQUARES = SQUARES_PER_SIZE * SQUARES_PER_SIZE;

    canvas.innerHTML = "";

    for (let i = 0; i < TOTAL_SQUARES; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${SQUARE_SIZE}px`;
        square.style.height = `${SQUARE_SIZE}px`;
        canvas.appendChild(square);
        
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "rgb(" + brushColour() + ")";
        });
    }
}

function brushColour() {

    if (brush == 0) {
        r = 40;
        g = 40;
        b = 40;
    }

    else if (brush == 1) {
        r = 215;
        g = 215;
        b = 215;
    }

    else if(brush == 2) {
        r = Math.floor(Math.random()*256);
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);
    }

    return r + "," + g  + "," + b;
}

createGrid(16);

btn_resize.addEventListener("click", () => {
    inputSize = parseInt(prompt("Enter the number of squares per side of the Etch-Pad. Number must be between 1-100"));

    if (inputSize > 0 && inputSize <= 100) {
        createGrid(inputSize);
    }

    else {
        while (!(inputSize > 0 && inputSize <= 100)) {
            inputSize = parseInt(prompt("Enter the number of squares per side of the Etch-Pad.\n\nNote: The input must be a number between 1-100."));
        }
    }

    createGrid(inputSize);
});

btn_clear.addEventListener("click", () => {
    createGrid(inputSize);
});

btn_normal.addEventListener("click", () => {
    brush = 0;
    btn_normal.style.backgroundColor = "gray";
    btn_erase.style.backgroundColor = "rgb(240, 240, 240)";
    btn_randomize.style.backgroundColor = "rgb(240, 240, 240)";
});

btn_erase.addEventListener("click", () => {
    brush = 1;
    btn_normal.style.backgroundColor = "rgb(240, 240, 240)";
    btn_erase.style.backgroundColor = "gray";
    btn_randomize.style.backgroundColor = "rgb(240, 240, 240)";
});

btn_randomize.addEventListener("click", () => {
    brush = 2;
    btn_normal.style.backgroundColor = "rgb(240, 240, 240)";
    btn_erase.style.backgroundColor = "rgb(240, 240, 240)";
    btn_randomize.style.backgroundColor = "gray";
});