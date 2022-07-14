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

// Change RGBA value of color
function changeColor(e) {
    let rvalue = rSlider.value
    let gvalue = gSlider.value
    let bvalue = bSlider.value
    let avalue = aSlider.value
    let newColor = `rgba(${rvalue}, ${gvalue}, ${bvalue}, ${avalue})`
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
    squareColor = "white"
    colorSquares(squareColor)
    // for (let i = 0; i < square.length; i++) {
    //     squareColor = "white"
    //     square[i].addEventListener("click", colorMe)
    //     square[i].addEventListener("mouseover", dragColorMe)
    // }
}

// Clear grid by making all squares white
function clearSquares() {
    for (let i = 0; i < square.length; i++) {
        squareColor = "white"
        square[i].style.backgroundColor = squareColor
    }
}

// Change squares border
function changeBorder() {
    for (let i = 0; i < square.length; i++) {
        if (document.getElementById("border-off").checked) {
            square[i].style.border = "0";
        }
        else {
            square[i].style.border = "1px solid black";
        }
    }
}

// Can click on squares immediately to change color
const grid = document.querySelector("#grid");
//grid.addEventListener("mousedown", changeColor);

// Create grid
const numSquares = 10; //default
createGrid(numSquares);


//document.documentElement.style.setProperty("--columns-row", numSquares)


// Color example square
let colorExampleSquare = document.querySelector("#color-box");

// Sliders to change color (RGBA values)
let rSlider = document.querySelector("#R-slider");
rSlider.addEventListener("mouseup", changeColor);
let gSlider = document.querySelector("#G-slider");
gSlider.addEventListener("mouseup", changeColor);
let bSlider = document.querySelector("#B-slider");
bSlider.addEventListener("mouseup", changeColor);
let aSlider = document.querySelector("#A-slider");
aSlider.addEventListener("mouseup", changeColor);

// Slider for grid size
let slider = document.querySelector("#square-slider");
slider.addEventListener("mouseup", changeGrid);

// Set squares and their initial color
let squareColor = "white";
const square = document.getElementsByClassName("square");
// for (let i = 0; i < square.length; i++) {
//     square[i].addEventListener("click", changeColor)
//     square[i].addEventListener("mouseover", changeColor)
// }

// Button to start coloring
document.querySelector("#color").addEventListener("click", changeColor);

// Buttons to erase and clear grid
let eraser = document.querySelector("#eraser").addEventListener("click", eraseSquares);
let clearGrid = document.querySelector("#clear").addEventListener("click", clearSquares);

// Radio buttons for square borders
const radioButtons = document.querySelectorAll("input[name='border-on-off']");

//let radioButtons = document.querySelector("radio-buttons").addEventListener("click", changeBorder);
let borderOn = document.querySelector("#border-on").addEventListener("click", changeBorder);
let borderOff = document.querySelector("#border-off").addEventListener("click", changeBorder);

// Setting mouseup and mousedown
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

