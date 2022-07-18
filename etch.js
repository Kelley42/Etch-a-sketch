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
    borderOn.checked = true
    colorButtonOn()
    changeColor()
}

// Change RGBA value of color
function changeColor(e) {
    //if (colorClicked.className == "button-active") { // Color
    colorButtonOn()
    let rvalue = rSlider.value
    let gvalue = gSlider.value
    let bvalue = bSlider.value
    let avalue = aSlider.value
    let newColor = `rgba(${rvalue}, ${gvalue}, ${bvalue}, ${avalue})`
    colorExampleSquare.style.backgroundColor = newColor;
    favoriteColor = newColor;
    colorSquares(newColor)
    
    // else if (rainbowClicked.className == "button-active") { // Rainbow
    //     rainbowButtonOn()
    //     let rvalue = Math.floor(Math.random() * 256)
    //     let gvalue = Math.floor(Math.random() * 256)
    //     let bvalue = Math.floor(Math.random() * 256)
    //     let avalue = 1
    //     let newColor = `rgba(${rvalue}, ${gvalue}, ${bvalue}, ${avalue})`
    //     colorExampleSquare.style.backgroundColor = newColor;
    //     favoriteColor = newColor;
    //     colorSquares(newColor)
    // }
}

// Color squares by clicking or dragging over
function colorSquares(newColor) {
    squareColor = newColor
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", colorMe)
        square[i].addEventListener("mouseover", dragColorMe)
    }
    // if (rainbowClicked.className == "button-active") { // Rainbow
    //     changeColor()
    // }
}

// Color squares
function colorMe(e) {
    console.log(squareColor)
    e.target.style.backgroundColor = squareColor
    if (randomClicked.className == "button-active") { // Random
        e.target.style.backgroundColor = squareColor
        changeColor
        //randomSquares()
    }
    else if (rainbowClicked.className == "button-active") { // Rainbow
        e.target.style.backgroundColor = squareColor
        getRandomColor()
    }

    // if (rainbowClicked.className = "button-active") {
    //     e.target.style.backgroundColor = squareColor
    //     rainbowSquares()
    // }
    // else {
    //     e.target.style.backgroundColor = squareColor
    // }
}

// Will only color while mouseover if mouse already down
function dragColorMe(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = squareColor
    }
    if (randomClicked.className == "button-active") { // Random
        changeColor
        //randomSquares()
    }
    else if (rainbowClicked.className == "button-active") { // Rainbow
        getRandomColor()
    }


    // if (rainbowClicked.className = "button-active") {
    //     if (mouseDown) {
    //         e.target.style.backgroundColor = squareColor
    //     }
    //     rainbowSquares()
    // }
    // else {
    //     if (mouseDown) {
    //         e.target.style.backgroundColor = squareColor
    //     }
    // }
}

// Color squares in random color
function randomSquares() {
    randomButtonOn()
    getRandomColor()
}

// Color squares in rainbow colors
function rainbowSquares() {
    rainbowButtonOn()
    getRandomColor()
}

// Get random color
function getRandomColor() {
    let rvalue = Math.floor(Math.random() * 256)
    let gvalue = Math.floor(Math.random() * 256)
    let bvalue = Math.floor(Math.random() * 256)
    let avalue = (Math.floor((Math.random() * 10) + 1)) / 10
    let newColor = `rgba(${rvalue}, ${gvalue}, ${bvalue}, ${avalue})`
    colorExampleSquare.style.backgroundColor = newColor;
    favoriteColor = newColor;
    colorSquares(newColor)
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
    clearButtonOn()
    for (let i = 0; i < square.length; i++) {
        squareColor = "white"
        square[i].style.backgroundColor = squareColor
    }
    // Make button white again
    setTimeout(function() {
        // Make button blue
        colorButtonOn()
        changeColor()
    }, 150);
}

// Change color of buttons, color active
function colorButtonOn() {
    colorClicked.className = "button-active"
    randomClicked.className = "button-inactive"
    rainbowClicked.className = "button-inactive"
    eraserClicked.className = "button-inactive"
    clearClicked.className = "button-inactive"
}

//Change color of buttons, random active
function randomButtonOn() {
    colorClicked.className = "button-inactive"
    randomClicked.className = "button-active"
    rainbowClicked.className = "button-inactive"
    eraserClicked.className = "button-inactive"
}

//Change color of buttons, rainbow active
function rainbowButtonOn() {
    colorClicked.className = "button-inactive"
    randomClicked.className = "button-inactive"
    rainbowClicked.className = "button-active"
    eraserClicked.className = "button-inactive"
}

// Change color of buttons, eraser active
function eraserButtonOn() {
    colorClicked.className = "button-inactive"
    randomClicked.className = "button-inactive"
    rainbowClicked.className = "button-inactive"
    eraserClicked.className = "button-active"
}

// Change color of buttons, clear active
function clearButtonOn() {
    colorClicked.className = "button-inactive"
    randomClicked.className = "button-inactive"
    rainbowClicked.className = "button-inactive"
    eraserClicked.className = "button-inactive"
    clearClicked.className = "button-active"
}

// Change squares border
function changeBorder() {
    if (!(borderOn.property == "checked")) {  // Unchecked
        for (let i = 0; i < square.length; i++) {
            square[i].style.border = "0";
        }
        borderOn.property = "checked"
    }
    else {  // Checked
        for (let i = 0; i < square.length; i++) {
            square[i].style.border = "1px solid black";
        }
        borderOn.property = "unchecked"
    }
    // for (let i = 0; i < square.length; i++) {
    //     if (borderOn.property = "checked") {
    //         square[i].style.border = "0";
    //     }
    //     else {
    //         square[i].style.border = "1px solid black";
    //     }
    // }
}

// Create favorites boxes to store favorite colors, and X marks boxes to remove favorites
function createFavorites(favoritesNumber) {
    for (let i = 0; i < favoritesNumber; i++) {
        const favSquare = document.createElement("div");
        favSquare.classList.add("favSquare")
        favSquare.setAttribute("id", "favSquareNum"+`${i}`)
        favSquare.style.backgroundColor = "white"
        //favoriteBoxes.push(favSquare)
        //favSquare.setAttribute("background-color", "white")
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

// Add favorite colors if heart clicked
function addFavorites() {
    for (let i = 0; i < favSquare.length; i++) {
        if (favSquare[i].style.backgroundColor == "white") { // If box has no color assigned
            favSquare[i].style.backgroundColor = favoriteColor
            favSquare[i].addEventListener("click", changeToFavColor)
            favXSquare[i].addEventListener("click", removeFavColor)
            break;
        }
    }
}

// Use color from favorites box
function changeToFavColor(e) {
    colorButtonOn()
    colorExampleSquare.style.backgroundColor = e.target.style.backgroundColor
    newColor = e.target.style.backgroundColor
    colorSquares(newColor)
}

// Remove favorite color
function removeFavColor() {
    this.parentNode.style.backgroundColor = "white"
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
// Random, rainbow, eraser, and clear buttons
const randomClicked = document.querySelector("#random");
randomClicked.addEventListener("click", randomSquares);
const rainbowClicked = document.querySelector("#rainbow");
rainbowClicked.addEventListener("click", rainbowSquares);
const eraserClicked = document.querySelector("#eraser");
eraserClicked.addEventListener("click", eraseSquares);
const clearClicked = document.querySelector("#clear");
clearClicked.addEventListener("click", clearSquares);

// Set color of buttons as default
colorButtonOn();

// Favorites section
const favorites = document.querySelector("#favorites-box-section");
createFavorites(favoritesNumber);
let favoriteColor;

const favSquare = document.getElementsByClassName("favSquare");
const favXSquare = document.getElementsByClassName("favXSquare")

// Heart for favorites
let heartButton = document.querySelector("#heart-button");
heartButton.addEventListener("click", addFavorites)

// Radio buttons for square borders
//const radioButtons = document.querySelectorAll("input[name='border-on-off']");

//let radioButtons = document.querySelector("radio-buttons").addEventListener("click", changeBorder);
// let borderOn = document.querySelector("#border-on")
// borderOn.addEventListener("click", changeBorder);
// let borderOff = document.querySelector("#border-off")
// borderOff.addEventListener("click", changeBorder);

// let borderOn = document.querySelector("checkbox")
// borderOn.addEventListener("click", changeBorder)
let borderOn = document.querySelector(".switchslider")
borderOn.addEventListener("click", changeBorder)

// Setting mouseup and mousedown
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

changeColor()