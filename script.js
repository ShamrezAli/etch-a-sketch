document.body.onload = addElement;

let gridInputNum = 20; // How many squares comprise width/height
let gridNum = Math.pow(gridInputNum, 2); // Square the value to get square

newWidth = gridInputNum*35; // Each square is 35px, so the total width should be the number of squares times 35px to get a proper square
document.getElementById("gridContainer").style.width = newWidth + "px"; // turn the newwidth value into the number of pixels with 'px'

function addElement() {

    for (let i = 0; i<gridNum; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        newDiv.setAttribute("class", "theGrids")
    
        // and give it some content
        const newContent = document.createTextNode("");

        newDiv.style.border = "thick solid #000000";
    
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("gridContainer");

        currentDiv.appendChild(newDiv);
    }
}
