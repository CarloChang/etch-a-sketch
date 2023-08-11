const container = document.querySelector('main');
let gridCreated = false;

function removeGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    gridCreated = false;
}

function startGrid() {
    if (gridCreated) {
        removeGrid()
    }

    let numCells = prompt('Select the number of grids, between 5 and 100');
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    if (numCells < 5 || numCells > 100) {
    alert('The number should be between 5 and 100, not lower of higher.');
    numCells = 0;
    } 

    for (let i = 1; i <= numCells; i++){
        let miniContainer = document.createElement('div');
        miniContainer.classList.add('grid-parent');
        container.appendChild(miniContainer);

        for (let j = 1; j <= numCells; j++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            miniContainer.appendChild(grid);

            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            });
        }
    }

    gridCreated = true;
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => startGrid());

