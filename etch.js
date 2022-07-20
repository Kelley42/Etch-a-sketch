const numSquares = 10; //default num of grid squares per side
const favoritesNumber = 6; // default number of favorites squares


function createGrid(numSquares) {
    let size = grid.clientWidth / numSquares;
    for (let i = 0; i < (numSquares * numSquares); i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        square.style.width = `${size}px` 
        square.style.height = `${size}px`
        grid.appendChild(square)
    }
}

function changeGrid() {
    grid.innerHTML = ""
    createGrid(slider.value)
    borderOn.checked = true
    colorButtonOn()
    changeColor()
}

function changeColor(e) {
    colorButtonOn()
    let rvalue = rSlider.value
    let gvalue = gSlider.value
    let bvalue = bSlider.value
    let avalue = aSlider.value
    let newColor = `rgba(${rvalue}, ${gvalue}, ${bvalue}, ${avalue})`
    colorExampleSquare.style.backgroundColor = newColor;
    favoriteColor = newColor;
    colorSquares(newColor)
}

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
    if (randomClicked.className == "button-active") { // Random
        e.target.style.backgroundColor = squareColor
        changeColor
    }
    else if (rainbowClicked.className == "button-active") { // Rainbow
        e.target.style.backgroundColor = squareColor
        getRandomColor()
    }
}

// Will only color while mouseover if mouse already down
function dragColorMe(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = squareColor
    }
    if (randomClicked.className == "button-active") { // Random
        changeColor
    }
    else if (rainbowClicked.className == "button-active") { // Rainbow
        getRandomColor()
    }
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

function eraseSquares() {
    eraserButtonOn()
    squareColor = "white"
    colorSquares(squareColor)
}

function clearSquares() {
    clearButtonOn()
    for (let i = 0; i < square.length; i++) {
        squareColor = "white"
        square[i].style.backgroundColor = squareColor
    }
    // Make button briefly change color
    setTimeout(function() {
        colorButtonOn()
        changeColor()
    }, 180);
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
}

// Create favorites boxes to store favorite colors, and X marks boxes to remove favorites
function createFavorites(favoritesNumber) {
    for (let i = 0; i < favoritesNumber; i++) {
        const favSquare = document.createElement("div");
        favSquare.classList.add("favSquare")
        favSquare.setAttribute("id", "favSquareNum"+`${i}`)
        favSquare.style.backgroundColor = "white"
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

function removeFavColor(e) {
    this.parentNode.style.backgroundColor = "white"
    colorButtonOn()
    e.stopPropagation()
    changeColor()
}


// Can click on squares immediately to change color
const grid = document.querySelector("#grid");

// Create grid
createGrid(numSquares);

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

// querySelector and addEventListener added separately, otherwise wouldn't work
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

// Switch for square borders
let borderOn = document.querySelector(".switchslider")
borderOn.addEventListener("click", changeBorder)

// Setting mouseup and mousedown
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Allows immediate coloring
changeColor()