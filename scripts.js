const CANVAS_SIZE = 16;
let canvas = document.querySelector(".container");
let grid = new Array(CANVAS_SIZE);

for (let i = 0; i < CANVAS_SIZE; i++) {
    grid[i] = document.createElement("div");
    grid[i].classList.add("square");
    grid[i].textContent = "i" + i; //TEST: To see index of squares
    canvas.appendChild(grid[i]);

    grid[i].addEventListener("mouseover", () => {
        grid[i].style.backgroundColor = 'red';
    });
    
    grid[i].addEventListener("mouseout", () => {
        grid[i].style.backgroundColor = 'white';
    });
}