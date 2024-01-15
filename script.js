//Loads the grid adding function immediately on page start
document.body.onload = addElement;

//Call variables that will be used
let gridInputNum = 0; // How many squares comprise width/height
let squaredInput = 0;
let newWidth = 0;
const button = document.querySelector('.applyButton');
const resetButton = document.querySelector('.resetButton');
let applyNewWidth = document.querySelector(".theGrids");
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

//function showGrid() {
  //  console.log("click worked")
    //addElement();
    //document.getElementById("theGrids").style.width = Number(newWidth) + "%";
//}

//document.getElementById("theGrids").style.width = newWidth + "%";; // turn the newwidth value into the number of pixels with 'px'

//document.body.style.backgroundColor = "red"; // turn the newwidth value into the number of pixels with 'px'

//squaredInput = Math.pow(gridInputNum, 2); // Square the value to get square
//newWidth = (100/(gridInputNum + 1)); // Each square is 35px, so the total width should be the number of squares times 35px to get a proper square

// the above is not applying my newWidth to the class.
// If it did then I would have a perfect grid created


//Function that adds grids to the grid container depending on number chosen
function addElement() {

    for (let i = 0; i<squaredInput; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        newDiv.setAttribute("class", "theGrids")
    
        // and give it some content
        const newContent = document.createTextNode("");

        newDiv.style.border = "solid thin #000000";
    
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("gridContainer");

        currentDiv.appendChild(newDiv);
    }
}
