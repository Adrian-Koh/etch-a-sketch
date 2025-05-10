const container = document.querySelector('#container');


const btn = document.createElement('button');
btn.textContent = 'Update squares per side';
btn.addEventListener('click', updateGridSquares);
container.appendChild(btn);

createGrid(16);

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
    gridDiv.style.gap = '10px;'

    for (let row = 0; row < squaresPerSide; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.gap = '10px;';
        
        gridDiv.appendChild(rowDiv);

        for (let col = 0; col < squaresPerSide; col++) {
            const div = document.createElement('div');
            div.style.height = '50px';
            div.style.width = '50px';
            div.style.border = 'solid 1px black'
            div.style.textAlign = 'center'


            div.textContent = row + ', ' + col;
            rowDiv.appendChild(div);
        }
    }

    container.appendChild(gridDiv);
    gridDiv.addEventListener('mouseover', (event) => {
        const target = event.target;
        changeColor(target);
    });
}

function changeColor(element) {
    element.style.backgroundColor = 'green';
    element.style.color = 'white';
}