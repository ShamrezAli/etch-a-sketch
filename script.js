document.body.onload = addElement;

/* function addElement() {
    for (let i=0; i<16; i++) {
        const newDiv = document.createElement("div");
        const divBorder = newDiv.style.border = "thick solid #0000FF"
        newDiv.appendChild(divBorder);
        const currentDiv = document.getElementById("mainGrid");
        document.body.insertBefore(newDiv, currentDiv);
    }
} */

/* function testBorder() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "testID");
    document.getElementById("testID").style.border = "thick solid #0000FF";
    const newContent = document.createTextNode("div");
    newDiv.appendChild(newContent)
    const currentDiv = document.getElementById("mainGrid");
    document.body.insertBefore(newDiv, currentDiv);
}
 */

function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    newDiv.style.border = "thick solid #0000FF";
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
