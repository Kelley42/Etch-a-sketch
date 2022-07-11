// function createGrid() {
//     const grid = document.querySelector("#grid");
//     for (let i = 0; i < numSquares; i++) {
//         for (let j = 0; j < numSquares; j++) {
//             const row = document.createElement("div");
//             grid.appendChild(row)
//         }   
//     }
// }

/*function createRows(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const row = document.createElement("row");
        row.classList.add("square");
        grid.appendChild(row);
    }
}
 
function createColumns(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const column = document.createElement("column");
        column.classList.add("square")
        grid.appendChild(column);
    }
}*/


function createGrid(numSquares) {
    let size = grid.clientWidth / numSquares;
    // for (let i = 0; i < numSquares; i++) {
    //     const row = document.createElement("div");
    //     row.classList.add("row");
        
    //     for (let j = 0; j < numSquares; j++) {
    //         const column = document.createElement("div");
    //         column.classList.add("column")
    //         row.appendChild(column);
    //     }
    //     grid.appendChild(row);
    // }
        for (let i = 0; i < (numSquares * numSquares); i++) {
            const square = document.createElement("div");
            square.classList.add("square")
            square.style.width = `${size}px` 
            square.style.height = `${size}px`
            grid.appendChild(square)

        }
}

// Changes size of grid
function changeGrid() {
    grid.innerHTML = ""
    createGrid(slider.value)
}

// Change R value of color
function changeColor(e) {
    let rvalue = rSlider.value
    let gvalue = gSlider.value
    let bvalue = bSlider.value
    let newColor = `rgb(${rvalue}, ${gvalue}, ${bvalue})`
    colorExampleSquare.style.backgroundColor = newColor;
    colorSquares(newColor)
}

// Color squares by clicking or dragging over
function colorSquares(newColor) {
    squareColor = newColor
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", colorMe)
        square[i].addEventListener("mouseover", dragColorMe)
    }
}

// Color squares
function colorMe(e) {
    e.target.style.backgroundColor = squareColor
}

// Will only color while mouseover if mouse already down
function dragColorMe(e) {
    if(mouseDown) {
        e.target.style.backgroundColor = squareColor
    }
}

// Erase squares by changing color to white
function eraseSquares() {
    for (let i = 0; i < square.length; i++) {
        squareColor = "white"
        square[i].addEventListener("click", colorMe)
        square[i].addEventListener("mouseover", dragColorMe)
    }
}

// Clear grid by making all squares white
function clearSquares() {
    for (let i = 0; i < square.length; i++) {
        squareColor = "white"
        square[i].style.backgroundColor = squareColor
    }
}


const grid = document.querySelector("#grid");
const numSquares = 10; //default
//document.documentElement.style.setProperty("--columns-row", numSquares)
createGrid(numSquares);

let colorExampleSquare = document.querySelector("#color-box");

let rSlider = document.querySelector("#R-slider");
rSlider.addEventListener("mouseup", changeColor);
let gSlider = document.querySelector("#G-slider");
gSlider.addEventListener("mouseup", changeColor);
let bSlider = document.querySelector("#B-slider");
bSlider.addEventListener("mouseup", changeColor);

let slider = document.querySelector("#square-slider");
slider.addEventListener("mouseup", changeGrid);

let squareColor = "white";
const square = document.getElementsByClassName("square");
document.querySelector("#color").addEventListener("click", colorSquares);
document.querySelector("#eraser").addEventListener("click", eraseSquares);
document.querySelector("#clear").addEventListener("click", clearSquares);



let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

