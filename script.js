const container = document.querySelector('#container');


function createGrid() {
    const gridDiv = document.createElement('div');
    gridDiv.style.display = 'flex';
    gridDiv.style.flexDirection = 'column';
    gridDiv.style.gap = '10px;'

    for (let row = 0; row < 16; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'space-between';
        rowDiv.style.gap = '10px;';
        
        gridDiv.appendChild(rowDiv);

        for (let col = 0; col < 16; col++) {
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