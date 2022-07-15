const numSquares = 10; //default num of grid squares per side
const favoritesNumber = 6; // default number of favorites squares

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
    console.log("change")
    colorButtonOn()
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
    console.log("color")
    squareColor = newColor
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", colorMe)
        square[i].addEventListener("mouseover", dragColorMe)
    }
}

// Color squares
function colorMe(e) {
    console.log("hola")
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
    console.log("erase")
    eraserButtonOn()
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
    console.log("clear")
    colorButtonOn()
    for (let i = 0; i < square.length; i++) {
        squareColor = "white"
        square[i].style.backgroundColor = squareColor
    }
}

// Change color of buttons, color active
function colorButtonOn() {
    colorClicked.className = "button-active"
    eraserClicked.className = "button-inactive"
}

// Change color of buttons, eraser active
function eraserButtonOn() {
    colorClicked.className = "button-inactive"
    eraserClicked.className = "button-active"
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

// Create favorites boxes to store favorite colors, and X marks boxes to remove favorites
function createFavorites(favoritesNumber) {
    for (let i = 0; i < favoritesNumber; i++) {
        const favSquare = document.createElement("div");
        favSquare.classList.add("favSquare")
        favorites.appendChild(favSquare)
        for (let j = 0; j < 1; j++) {        
            const favXSquare = document.createElement("div");
            favXSquare.classList.add("favXSquare")
            favXSquare.innerHTML = "X"
            favXSquare.style.fontSize = "10px";
            favSquare.appendChild(favXSquare)
        }
    }
}

// Can click on squares immediately to change color
const grid = document.querySelector("#grid");
//grid.addEventListener("mousedown", changeColor);

// Create grid
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

// Set squares
const square = document.getElementsByClassName("square");
let squareColor = "white"; //default color

// Only querySelector, not addEventListener, needed to be assigned to const for buttons to change color
// Button to start coloring
const colorClicked = document.querySelector("#color");
colorClicked.addEventListener("click", changeColor);
// Buttons to erase and clear grid
const eraserClicked = document.querySelector("#eraser");
eraserClicked.addEventListener("click", eraseSquares);
const clearClicked = document.querySelector("#clear");
clearClicked.addEventListener("click", clearSquares);

// Set color of buttons as default
colorButtonOn();

// Favorites section
const favorites = document.querySelector("#favorites-box-section");
createFavorites(favoritesNumber);

// Radio buttons for square borders
const radioButtons = document.querySelectorAll("input[name='border-on-off']");

//let radioButtons = document.querySelector("radio-buttons").addEventListener("click", changeBorder);
let borderOn = document.querySelector("#border-on").addEventListener("click", changeBorder);
let borderOff = document.querySelector("#border-off").addEventListener("click", changeBorder);

// Setting mouseup and mousedown
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

