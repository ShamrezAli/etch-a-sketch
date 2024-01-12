document.body.onload = addElement;

let gridInputNum = 3; // How many squares comprise width/height
let gridNum = Math.pow(gridInputNum, 2); // Square the value to get square

newWidth = (100/(gridInputNum + 1)); // Each square is 35px, so the total width should be the number of squares times 35px to get a proper square
document.getElementById("theGrids").style.width = newWidth + "%"; // turn the newwidth value into the number of pixels with 'px'


// the above is not applying my newWidth to the class.
// If it did then I would have a perfect grid created

function addElement() {

    for (let i = 0; i<gridNum; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        newDiv.setAttribute("Id", "theGrids")
    
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
