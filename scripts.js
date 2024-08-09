const canvas = document.querySelector(".canvas");
const toggleBrush = document.querySelector(".toggleBrush");
const btn_resize = document.querySelector(".resize");
const btn_clear = document.querySelector(".clear");
const btn_normal = document.querySelector(".normal");
const btn_erase = document.querySelector(".erase");
const btn_random = document.querySelector(".random");
const btn_grid = document.querySelector(".toggleGrid");

//Global Variables
let inputSize = 16;
let brush = 0;
let toggle = 1;
let toggleGrid = true;

function createGrid (SQUARES_PER_SIDE) {
    const SQUARE_SIZE = 720 / SQUARES_PER_SIDE; //Evenly divides squares within 720px (The size of the Etch-Pad).
    const TOTAL_SQUARES = SQUARES_PER_SIDE * SQUARES_PER_SIDE;

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
    if (brush == 0) {       //Normal colour
        r = 50;
        g = 50;
        b = 50;
    }

    else if (brush == 1) {  //Erase mode
        r = 215;
        g = 215;
        b = 215;
    }

    else if(brush == 2) {   //Randomize colour
        r = randomColour();
        g = randomColour();
        b = randomColour();
    }

    return r + "," + g  + "," + b;
}

function randomColour() {
    return Math.floor(Math.random()*256);
}

createGrid(inputSize);

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

btn_grid.addEventListener("click", () => {
    const grid = document.querySelectorAll(".square");
    
    if (toggleGrid == true) {
        btn_grid.textContent = "Grid: OFF";
        grid.forEach(square => {
            square.style.border = "0px";
        });
        toggleGrid = false;
    }

    else if (toggleGrid == false) {
        btn_grid.textContent = "Grid: ON";
        grid.forEach(square => {
            square.style.border = "1px solid black";
        });
        toggleGrid = true;
    }
});

btn_clear.addEventListener("click", () => {
    createGrid(inputSize);
    btn_grid.textContent = "Grid: ON";
    toggleGrid = true;
});

btn_resize.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter the number of squares per side of the Etch-Pad.\n\nNote: Number must be between 1-100."));

    if (newSize > 0 && newSize <= 100) {
        inputSize = newSize;
        createGrid(inputSize);
        btn_grid.textContent = "Grid: ON";
        toggleGrid = true;
    }

    else {
        window.alert("Etch-Pad canvas size must be a number between 1-100.");
    }
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