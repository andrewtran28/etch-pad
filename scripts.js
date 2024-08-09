//Global Variables
const canvas = document.querySelector(".canvas");
const toggleBrush = document.querySelector(".toggleBrush");
const btn_resize = document.querySelector(".resize");
const btn_clear = document.querySelector(".clear");
const btn_normal = document.querySelector(".normal");
const btn_erase = document.querySelector(".erase");
const btn_random = document.querySelector(".random");

let inputSize = 16;
let brush = 0;
let toggle = 1;

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

        square.addEventListener("mouseover", () => {
            if (toggle == true) {
                square.style.backgroundColor = "rgb(" + brushColour() + ")";
            }
        });
    }
}

function brushColour() {
    if (brush == 0) {
        r = 50;
        g = 50;
        b = 50;
    }

    else if (brush == 1) {
        r = 215;
        g = 215;
        b = 215;
    }

    else if(brush == 2) {
        r = randomColour();
        g = randomColour();
        b = randomColour();
    }

    return r + "," + g  + "," + b;
}

function randomColour() {
    return Math.floor(Math.random()*256);
}

createGrid(16);

canvas.addEventListener("click", () => {
    if (toggle == true) {
        toggle = !toggle;
        toggleBrush.textContent = "Brush: OFF";
    }

    else if (toggle == false) {
        toggle = !toggle;
        toggleBrush.textContent = "Brush: ON";
    }
});

btn_resize.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter the number of squares per side of the Etch-Pad.\n\nNote: Number must be between 1-100."));

    if (newSize > 0 && newSize <= 100) {
        inputSize = newSize;
        createGrid(inputSize);
    }

    else {
        window.alert("Etch-Pad canvas size must be a number between 1-100.");
    }
});

btn_clear.addEventListener("click", () => {
    createGrid(inputSize);
});

btn_normal.addEventListener("click", () => {
    brush = 0;
    btn_normal.style.backgroundColor = "gray";
    btn_erase.style.backgroundColor = "rgb(240, 240, 240)";
    btn_random.style.backgroundColor = "rgb(240, 240, 240)";
    btn_random.style.color = "black";
});

btn_erase.addEventListener("click", () => {
    brush = 1;
    btn_normal.style.backgroundColor = "rgb(240, 240, 240)";
    btn_erase.style.backgroundColor = "gray";
    btn_random.style.backgroundColor = "rgb(240, 240, 240)";
    btn_random.style.color = "black";
});

btn_random.addEventListener("click", () => {
    brush = 2;
    btn_normal.style.backgroundColor = "rgb(240, 240, 240)";
    btn_erase.style.backgroundColor = "rgb(240, 240, 240)";
    btn_random.style.backgroundColor = "rgb(" + randomColour() + "," + randomColour() + "," + randomColour() + ")";
    btn_random.style.color = "rgb(" + randomColour() + "," + randomColour() + "," + randomColour() + ")";
});