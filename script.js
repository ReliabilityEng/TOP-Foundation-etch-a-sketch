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

function addHoverEffect() {
    const pixels = document.querySelectorAll('.pixelDivColumn');
    pixels.forEach((pixel) => pixel.addEventListener('mouseover', 
    () => {
        if(mouseDown) {
            pixel.classList.add('coloredPixel');
        }        
    }
    ));
    
}

generateGrid(gridResolution);
addHoverEffect();



// isDown = false;
// const DURATION = 500
// elem = document.querySelector('body');
// elem.addEventListener('mousedown', function(event) { 
// 	// simulating hold event
//     if (isDown == false){
// 		isDown = true;
// 	    setInterval(function() {
// 			if (isDown == true){
// 				console.log("Hold");
//                 console.log(event.target)
// 			}
// 		}, DURATION);
// 	}
// });

// elem.addEventListener('mouseup', function(event) {
// 	isDown=false;  
// });