const container = document.querySelector('#container');
const GRID_WIDTH = 900;

createButton();
createGrid(16);

function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Update squares per side';
    btn.addEventListener('click', updateGridSquares);
    container.appendChild(btn);
}

function updateGridSquares() {
    squaresPerSide = prompt('Please enter the number of squares per side.');
    squaresPerSide = parseInt(squaresPerSide);
    if (!Number.isInteger(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Please enter a number less than or equal to 100.");
        return;
    }
    const oldGridDiv = document.querySelector('#grid');
    container.removeChild(oldGridDiv);

    createGrid(squaresPerSide);
}


function createGrid(squaresPerSide) {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('id', 'grid');
    gridDiv.style.display = 'flex';
    gridDiv.style.flexDirection = 'column';

    squareWidth = parseInt(GRID_WIDTH / squaresPerSide);

    for (let row = 0; row < squaresPerSide; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.maxWidth = GRID_WIDTH + 'px';
        rowDiv.style.maxHeight = squareWidth + 'px';
        
        gridDiv.appendChild(rowDiv);

        for (let col = 0; col < squaresPerSide; col++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'square');
            div.style.border = 'solid 1px black'
            div.style.width = squareWidth + 'px';
            div.style.height = squareWidth + 'px';
            div.style.boxSizing = 'border-box';

            rowDiv.appendChild(div);
        }
    }

    container.appendChild(gridDiv);
    gridDiv.addEventListener('mouseover', (event) => {
        const id = event.target.id;
        if (id === 'square') {
            changeSquareColor(event.target);
        }
    });
}

function changeSquareColor(element) {
    element.style.backgroundColor = 'green';
    element.style.color = 'white';
}