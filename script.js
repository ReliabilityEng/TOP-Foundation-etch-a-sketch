// Creation of Elements
const gridContainerDiv = document.querySelector('.gridContainer');


// Hover Mouse Effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => btn.addEventListener('mouseover', 
    () => {
        btn.classList.add('btn-hover');
    }
))

buttons.forEach((btn) => btn.addEventListener('mouseout', 
    () => {
        btn.classList.remove('btn-hover');
    }
))

buttons.forEach((btn) => btn.addEventListener('mousedown', 
    () => {
        btn.classList.add('btn-click');
    }
))

buttons.forEach((btn) => btn.addEventListener('mouseup', 
    () => {
        btn.classList.remove('btn-click');
    }
))

// Mouse hold down event
let mouseDown;
window.addEventListener('mousedown',(evt) => mouseDown = true);
window.addEventListener('mouseup',(evt) => mouseDown = false);


// Variables
let gridResolution = 64;    // This is 1:1 Aspect Ratio

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
    if(!mouseDown) {
        element.setAttribute('style', `background-color: ${getRandomColor()}`);
    }  
}

function setBlackInkColor(element)  {
    if(!mouseDown) {
        element.setAttribute('style', `background-color: black`);
    }
}

function setBlackPencil(element)  {
    if(!mouseDown) {
        // Identify the RGB of the element background color
        let currentRGB = element.style.backgroundColor.match(/\d+/g)
        let [r, g, b] = [...currentRGB];

        // Calculate the new RGB by adding a shade darker
        [r, g, b] = [r - 25.5, g - 25.5, b - 25.5]
        
        // Apply the new background color to the element
        element.setAttribute('style', `background-color: RGB(${r}, ${g}, ${b})`);

        // console.log([r, g, b]);
    }
}

function drawV2() {
    // Instead of modifying the class this will modify the style of the divs
    const pixels = document.querySelectorAll('.pixelDivColumn');
    const events = ['mousedown', 'mouseover'];
    
    events.forEach((evt) => {
        pixels.forEach((pixel) => {
            // pixel.addEventListener(evt, () => setRandomColor(pixel))
            // pixel.addEventListener(evt, () => setBlackInkColor(pixel))
            pixel.addEventListener(evt, () => setBlackPencil(pixel))
        })
    }
    )
}

function clearGridV2() {
    const pixels = document.querySelectorAll('.pixelDivColumn');
    
    pixels.forEach((pixel) => {
            // Clear the background color of the pixel
            setTimeout(()=>pixel.classList.remove('pixel-transition'),500);
            pixel.classList.add('pixel-transition');
            
            pixel.setAttribute('style', 'background-color: RGB(255, 255, 255)');
        });
}

// Calling Functions
const clearBtn = document.querySelector('#btn-clear');
clearBtn.addEventListener('click', clearGridV2);

generateGrid(gridResolution);
clearGridV2();
drawV2();