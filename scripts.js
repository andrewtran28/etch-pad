const CANVAS_SIZE = 16;
let canvas = document.querySelector(".container");
let grid = Array(CANVAS_SIZE).fill().map(() => Array(CANVAS_SIZE).fill());
let newRow = Array(CANVAS_SIZE);

for(let y = 0; y < CANVAS_SIZE; y++) {
    let r = 0;
    for (let x = 0; x < CANVAS_SIZE; x++) {
        if (r == 0 ) {
            newRow[r] = document.createElement("div");
            canvas.appendChild(newRow[r]);
        }
        grid[y][x] = document.createElement("div");
        grid[y][x].classList.add("square");
        grid[y][x].textContent ="X" + x + "Y" + y; //TEST: To see index of squares
        canvas.appendChild(grid[y][x]);
    
        grid[y][x].addEventListener("mouseover", () => {
            grid[y][x].style.backgroundColor = 'red';
        });
        
        grid[y][x].addEventListener("mouseout", () => {
            grid[y][x].style.backgroundColor = 'white';
        });
        r++;
    }
}

