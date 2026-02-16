var sourceCode = "";
var sourceContainer, sourceElement, accessMessageElement;

var startIndex = 0;
var endIndex = 0;

const CHARS_PER_STROKE = 5;

var locked = false;

const loadSourceCode = () => {
    var request = new XMLHttpRequest();
    request.open("GET", "./code.txt");
    request.onreadystatechange = () => {
        sourceCode = request.responseText
        console.log(sourceCode);
    }
    request.send();
}   
const getElements = () => {
    sourceContainer = document.getElementById("container");
    sourceElement = document.getElementById("source");
    accessMessageElement = document.getElementById("access-msg");
}

const updateScreen = () => {
    if(!locked){
        endIndex+= CHARS_PER_STROKE
        //update source code
        sourceElement.textContent = sourceCode.substring(startIndex, endIndex)

        //update access message
        if(endIndex !==0 && endIndex%750/2 === 0){
            accessMessageElement.textContent = "access denied"
            accessMessageElement.classList.add('denied')
            sourceContainer.classList.add('blured')
            locked = true;
        }
        if (endIndex !== 0 && endIndex % 750 === 0) {
            sourceContainer.classList.add('blurred')
            locked = true;
            accessMessageElement.classList.add("success")
            accessMessageElement.textContent = "Access Granted"
        }
    }
}

function updateCursor() {
    //var text = sourceElement.textContent;
    // var lastChar = text.charAt(text.length - 1);
    // if (lastChar === cursorChar) {
    //     sourceElement.textContent = text.substring(0, text.length - 1);
    // }
    // else {
    sourceElement.textContent += cursorChar;
    // }
}



const removeMessage = () => {
    locked = false;
    accessMessageElement.removeAttribute('class')
    sourceContainer.removeAttribute('class')
}

const init = () => {
    loadSourceCode();
    getElements();
}

init()

window.onkeydown = (e) => {
    if (e.key === "Escape")
        removeMessage()
    else
        updateScreen()
};