const canvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
let currentColor = '#000000';

// Create a 20x20 grid
const numRows = 20;
const numCols = 20;

// Initialize the pixel grid
function initGrid() {
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('mousedown', function() {
                togglePixelColor(this);
            });
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

// Toggle pixel color when clicked
function togglePixelColor(pixel) {
    if (pixel.style.backgroundColor === currentColor) {
        pixel.style.backgroundColor = '#ffffff'; // Clear the pixel
    } else {
        pixel.style.backgroundColor = currentColor; // Set the pixel color
    }
}

// Function to set the current drawing color
function setColor() {
    currentColor = colorPicker.value;
}

// Function to clear the canvas
function clearCanvas() {
    const pixels = document.querySelectorAll('#pixelCanvas td');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#ffffff';
    });
}

// Function to download the canvas as an image
function downloadImage() {
    const canvasClone = canvas.cloneNode(true);
    const cells = canvasClone.querySelectorAll('td');

    cells.forEach(cell => {
        cell.style.border = 'none'; // Remove borders for cleaner image
    });

    const canvasImage = new Image();
    canvasImage.src = getImageDataUrl(canvasClone);

    const link = document.createElement('a');
    link.setAttribute('download', 'pixel_art.png');
    link.setAttribute('href', canvasImage.src);
    link.click();
}

// Function to convert canvas to image data URL
function getImageDataUrl(canvas) {
    const canvasContext = canvas.getContext('2d');
    return canvas.toDataURL('image/png');
}

// Initialize the grid on page load
initGrid();
