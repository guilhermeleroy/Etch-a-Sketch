//global variables
let color = "black";

function makeBoard(size) {
    let board = document.querySelector('.board');

    //each time the board size is settled, we have to erase what we had and build the board from scratch 
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.border = '0.2px solid lightgrey';
        board.insertAdjacentElement('beforeend', square);

        square.addEventListener('mouseover', colorSquare);
        square.addEventListener('mousedown', colorSquareClick);
    }
}

makeBoard(16);

function changeBoardSize() {
    if (this.value >= 2 && this.value <= 100)
        makeBoard(this.value);
    else
        console.error("Out of range")
}

function colorSquare(e) {
    if (e.buttons === 1){
        if (color === "random"){
            this.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;
        }
        else {
            this.style.background = color;
        }    
    }
}

function colorSquareClick() {
    if (color === "random"){
        this.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;
    }
    else {
        this.style.background = color;
    }   
    
}


function changeColor(choice) {
    color = choice;
}

let input = document.querySelector('input');
input.addEventListener('change', changeBoardSize);

//https://www.youtube.com/watch?v=dyhuaXeuyGo