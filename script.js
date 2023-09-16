document.body.onload = addElement;

let gridInputNum = 5;
let gridNum = Math.pow(gridInputNum, 2);

function addElement() {

    for (let i = 0; i<gridNum; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        newDiv.setAttribute("class", "theGrids")
    
        // and give it some content
        const newContent = document.createTextNode("Hi there and greetings!");

        newDiv.style.border = "thick solid #0000FF";
    
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("gridContainer");

        currentDiv.appendChild(newDiv);
    }
}
