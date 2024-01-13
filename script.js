document.body.onload = addElement;

let gridInputNum = 0; // How many squares comprise width/height
let squaredInput = 0;
let newWidth = 0;

const gridNums = document.querySelector("#numSelect");
gridNums.addEventListener('change', () => {
    gridInputNum = gridNums.value;
    squaredInput = Math.pow(gridInputNum, 2);
    newWidth = 100/((Number(gridInputNum))+1);
    console.log(gridInputNum); 
    console.log(squaredInput);
    console.log(newWidth);
})

function showGrid() {
    console.log("click worked")
    addElement();
    document.getElementById("theGrids").style.width = Number(newWidth) + "%";
}

//document.getElementById("theGrids").style.width = newWidth + "%";; // turn the newwidth value into the number of pixels with 'px'

//document.body.style.backgroundColor = "red"; // turn the newwidth value into the number of pixels with 'px'

//squaredInput = Math.pow(gridInputNum, 2); // Square the value to get square
//newWidth = (100/(gridInputNum + 1)); // Each square is 35px, so the total width should be the number of squares times 35px to get a proper square

// the above is not applying my newWidth to the class.
// If it did then I would have a perfect grid created

function addElement() {

    for (let i = 0; i<squaredInput; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        newDiv.setAttribute("class", "theGrids")
    
        // and give it some content
        const newContent = document.createTextNode("");

        newDiv.style.border = "solid #000000";
    
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("gridContainer");

        currentDiv.appendChild(newDiv);
    }
}

/* 
What needs to be done:
Add number chooser
Make number chooser value change the grid input number value
create a function: when button pressed, change the grid input number
variable value (into the number in input box) and apply the 
document theGrids style width equal to the newWidth calculated value 

*/
