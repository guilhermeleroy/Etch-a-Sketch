function makeBoard(size) {
    let board = document.querySelector('.board');

    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        //square.style.backgroundColor = 'blue';
        square.style.border = '0.2px solid lightgrey';
        board.insertAdjacentElement('beforeend', square);
    }
}

makeBoard(16);

function changeBoardSize(e) {
    if (this.value >= 2 && this.value <= 100)
        makeBoard(this.value);
    else
        console.error("Out of range")
}

let input = document.querySelector('input');
input.addEventListener('change', changeBoardSize);

//https://www.youtube.com/watch?v=dyhuaXeuyGo