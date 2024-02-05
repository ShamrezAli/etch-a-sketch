//Loads the grid adding function immediately on page start
document.body.onload = addElement;

//Call variables that will be used
let gridInputNum = 0; // How many squares comprise width/height
let squaredInput = 0;
let newWidth = 0;
const button = document.querySelector('.applyButton');
const resetButton = document.querySelector('.resetButton');
const theGridSquares = document.querySelector(".theGrids");
const gridContainer = document.querySelector(".gridContainer");
const gridNums = document.querySelector("#numSelect");

//Reacts to number box being changed, does math for the grids and width
gridNums.addEventListener('change', () => {
    gridInputNum = gridNums.value;
    squaredInput = Math.pow(gridInputNum, 2);
    newWidth = 100/((Number(gridInputNum))+1);
    console.log(gridInputNum); 
    console.log(squaredInput);
    console.log(newWidth);
})

//Calls grid forming function and changes grid width
button.addEventListener('click', function() {
    console.log("click worked");
    addElement();
    widthSweep();
    button.disabled = true;
    })

//Resets the page to allow a new number to be applied   
resetButton.addEventListener('click', function() {
    gridInputNum = 0;
    squaredInput = 0;
    newWidth = 0;
    window.location.reload();
    console.log('this button works too');
})

//Apply width adjustment for every element in the grid container
function widthSweep() {
    let elements = document.getElementsByClassName('theGrids');
    for (let i=0; i < elements.length; i++) {
        elements[i].style.width = newWidth + "%";
    }
}

//Function that adds grids to the grid container depending on number chosen
function addElement() {

    for (let i = 0; i<squaredInput; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        newDiv.setAttribute("class", "theGrids")
    
        // and give it some content
        const newContent = document.createTextNode("");

        newDiv.style.border = "solid thin #E6E6FA";
    
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("gridContainer");

        currentDiv.appendChild(newDiv);
    }
}

// Allow for the gradual colouration of grids as drawn in
gridContainer.addEventListener('mouseover', event => {
    let target = event.target
    let rbgPercentValue = parseInt(target.dataset.percent);
    if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
    if (rbgPercentValue >= 25) {
        rbgPercentValue -= 25;
        target.dataset.percent = rbgPercentValue;
    }
        let rgbColor = `rgb(${rbgPercentValue}%,${rbgPercentValue}%,${rbgPercentValue}%)`
    
        if (target !== gridContainer) {
            target.style['background'] = rgbColor;
        }
    
    })