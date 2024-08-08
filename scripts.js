//Global Variables
const canvas = document.querySelector(".container");
const CANVAS_SIZE = 16;

function createGrid (CANVAS_SIZE) {
    const SQUARE_SIZE = 1080 / CANVAS_SIZE;
    const TOTAL_SQUARES = CANVAS_SIZE * CANVAS_SIZE;

    for (let i = 0; i < TOTAL_SQUARES; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${SQUARE_SIZE}px`;
        square.style.height = `${SQUARE_SIZE}px`;
        canvas.appendChild(square);
        
        square.addEventListener("mouseenter", () => {
            //mouse event listener function to replace here
            square.style.backgroundColor = 'green';
        });
        
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = 'white';
        });
    }
}

createGrid(CANVAS_SIZE);
