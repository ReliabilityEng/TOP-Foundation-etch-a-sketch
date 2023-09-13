// Creation of Elements
const gridContainerDiv = document.querySelector('.gridContainer');

// Mouse hold down event
let mouseDown;
window.addEventListener('mousedown',(evt) => mouseDown = true);
window.addEventListener('mouseup',(evt) => mouseDown = false);

// Variables
let gridResolution = 32;    // This is 1:1 Aspect Ratio

// Functions
function generateGrid(gridResolution) {
    // Generates a square grid with a vertical and horizontal resolution of gridResolution
    for(let rowContainer = 0; rowContainer < gridResolution; rowContainer++) {
            const pixelDivRow = document.createElement('div');
            pixelDivRow.classList.add('pixelDivRow');
            gridContainerDiv.appendChild(pixelDivRow);

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

function clearGrid() {
    const pixels = document.querySelectorAll('.pixelDivColumn');
    
    pixels.forEach((pixel) => {
            // Clear pixel grid of any class
            pixel.className = "";

            // Reinstate the default class
            pixel.classList.add("pixelDivColumn");
        });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    const HEX_LENGTH = 6;

    for (let i = 0; i < HEX_LENGTH; i++) {
        let randomIndex = Math.floor(Math.random() * 16); // Random number between 0 - 15
        color += letters[randomIndex];
    }

    return color;
}

function setRandomColor(element) {
    element.setAttribute('style', `background-color: ${getRandomColor()}`);
}

function drawV2() {
    // Instead of modifying the class this will modify the style of the divs
    const pixels = document.querySelectorAll('.pixelDivColumn');
    const events = ['mousedown', 'mouseover'];
    
    events.forEach((evt) => {
        pixels.forEach((pixel) => {
            pixel.addEventListener(evt, () => setRandomColor(pixel))
        })
    }
    )
}

function clearGridV2() {
    const pixels = document.querySelectorAll('.pixelDivColumn');
    
    pixels.forEach((pixel) => {
            // Clear the background color of the pixel
            pixel.setAttribute('style', 'background-color: ""');
        });
}

// Calling Functions
const clearBtn = document.querySelector('#btn-clear');
clearBtn.addEventListener('click', clearGridV2);

generateGrid(gridResolution);
drawV2();