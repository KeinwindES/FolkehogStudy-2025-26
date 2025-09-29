// JavaScript to handle button clicks
const button = document.getElementById("add-button");
const list = document.getElementById("list");

function getStoredItems() {
    let storedData = localStorage.getItem("todoItems");
    if (storedData != null) {
        return JSON.parse(storedData);
    }   
    return [];
}

function updateHtml() {
    list.innerHTML = "";
    for (let i = 0; i < todoItems.length; i++) {
        const item = todoItems[i];
        let listItem = document.createElement("li");
        listItem.innerText = item;
        list.appendChild(listItem);
    }
}

function save(){
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

function SaveButtonClicked() {
    save();
    updateHtml();
}

saveButton.addEventListener("click", SaveButtonClicked);
button.addEventListener("click", () => {
    const input = document.getElementById("item-input");
    const newItem = input.value;
    if (newItem === "") return;
    todoItems.push(newItem);
    input.value = "";
    save();
    updateHtml();
});

let todoItems = getStoredItems();
updateHtml();
