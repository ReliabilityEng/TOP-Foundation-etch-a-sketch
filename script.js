// Creation of Elements
const containerDiv = document.querySelector('.container');

// Mouse hold down event
let mouseDown;
window.addEventListener('mousedown',(evt) => mouseDown = true);
window.addEventListener('mouseup',(evt) => mouseDown = false);


// Variables
let gridResolution = 32;    // This is 1:1 Aspect Ratio

function generateGrid(gridResolution) {
    // Generates a square grid with a vertical and horizontal resolution of gridResolution
    for(let rowContainer = 0; rowContainer < gridResolution; rowContainer++) {
            const pixelDivRow = document.createElement('div');
            pixelDivRow.classList.add('pixelDivRow');
            containerDiv.appendChild(pixelDivRow);

        for(let columnPixel = 0; columnPixel < gridResolution; columnPixel++) {
            const pixelDivCol = document.createElement('div');
            pixelDivCol.classList.add('pixelDivColumn');
            pixelDivRow.appendChild(pixelDivCol);
        }
    }
}

function draw() {
    const pixels = document.querySelectorAll('.pixelDivColumn');

    pixels.forEach((pixel) => pixel.addEventListener('mouseover', 
    () => {
        if(mouseDown) {
            pixel.classList.add('coloredPixel');
        }        
    }
    ));

    pixels.forEach((pixel) => pixel.addEventListener('mousedown', () => {
        pixel.classList.add('coloredPixel');
    }),
    )
    
}

generateGrid(gridResolution);
draw();