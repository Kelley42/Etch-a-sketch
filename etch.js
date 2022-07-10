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


function createGrid() {
    const grid = document.querySelector("#grid");
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
// Color squares by clicking or dragging over
function colorSquares() {
    
    for (let i = 0; i < square.length; i++) {
        squareColor = "red"
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

// function clearSquares() {

// }

//const numSquares = prompt("How many squares per side?: ")
const numSquares = 10;
//document.documentElement.style.setProperty("--columns-row", numSquares)
createGrid();

let squareColor = "white";
const square = document.getElementsByClassName("square");
document.querySelector("#color").addEventListener("click", colorSquares);
document.querySelector("#eraser").addEventListener("click", eraseSquares);
// document.querySelector("#clear").addEventListener("click", clearSquares);



let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const grid = document.querySelector("#grid");
grid.onmouseover = () => mouseDown