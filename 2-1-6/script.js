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
        if(endIndex !==0 && endIndex%300 === 0){
            accessMessageElement.textContent = "access denied"
            accessMessageElement.classList.add('denied')
            sourceContainer.classList.add('blured')
            locked = true;
        }
        if(endIndex !==0 && endIndex%750 === 0){
            accessMessageElement.textContent = "access granted"
            accessMessageElement.classList.add('success')
            sourceContainer.classList.add('blured')
            locked = true;
        }
    }
}

const removeMessage = () => {
    locked = false;
    accessMessageElement.removeAttribute('class');
    accessMessageElement.classList.add('denied');
    sourceContainer.classList.remove('class');

}

const init = () => {
    loadSourceCode();
    getElements();
}

init()

window.onkeydown = (e) => {
    if(e.key === "Enter"){
        removeMessage();
    }else{}
    updateScreen()
}