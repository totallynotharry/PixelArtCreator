const canvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
let currentColor = '#000000';

// Create a 20x20 grid
const numRows = 20;
const numCols = 20;

// Function to generate the grid
function createGrid() {
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('mousedown', function() {
                this.style.backgroundColor = currentColor;
            });
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

// Initialize the grid
createGrid();

// Function to set the current drawing color
function setColor() {
    currentColor = colorPicker.value;
}

// Function to clear the canvas
function clearCanvas() {
    const cells = document.querySelectorAll('#pixelCanvas td');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#ffffff';
    });
}
