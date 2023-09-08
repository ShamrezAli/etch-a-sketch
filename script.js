document.body.onload = addElement;

function addElement() {
    for (let i=0; i<16; i++) {
        const newDiv = document.createElement("div");
        const divBorder = newDiv.style.border = "thick solid #0000FF"
        newDiv.appendChild(divBorder);
        const currentDiv = document.getElementById("mainGrid");
        document.body.insertBefore(newDiv, currentDiv);
    }
    
}