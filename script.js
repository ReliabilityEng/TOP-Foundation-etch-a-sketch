// Creation of Elements
const containerDiv = document.querySelector('.container');


// Variables
let gridResolution = 4;    // This is 1:1 Aspect Ratio

function generateGrid(gridResolution) {
    // Generates a square grid with a vertical and horizontal resolution of gridResolution
    for(let horizontalPixel = 0; horizontalPixel < gridResolution; horizontalPixel++) {
            const pixelDivRow = document.createElement('div');
            pixelDivRow.classList.add('pixelDivRow');
            containerDiv.appendChild(pixelDivRow);

        for(let verticalPixel = 0; verticalPixel < gridResolution; verticalPixel++) {
            const pixelDivCol = document.createElement('div');
            pixelDivCol.classList.add('pixelDivColumn');
            pixelDivRow.appendChild(pixelDivCol);
        }
    }
}

generateGrid(gridResolution);
