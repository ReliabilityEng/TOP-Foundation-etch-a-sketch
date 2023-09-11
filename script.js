// Creation of Elements
const containerDiv = document.querySelector('.container');


// Variables
let gridResolution = 16;    // This is 1:1 Aspect Ratio

function generateGrid(gridResolution) {
    // Generates a square grid with a vertical and horizontal resolution of gridResolution
    for(let horizontalPixel = 0; horizontalPixel < gridResolution; horizontalPixel++) {
        for(let verticalPixel = 0; verticalPixel < gridResolution; verticalPixel++) {
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixelDiv');
            containerDiv.appendChild(pixelDiv);
        }
    }
}

generateGrid(gridResolution);
