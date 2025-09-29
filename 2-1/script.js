// JavaScript to handle button clicks
const button = document.getElementById("add-button");
const input = document.getElementById("item-input");
const list = document.getElementById("list");

button.addEventListener("click", function () {
    const value = input.value.trim();
    if (value !== "") {
        // Only add if input is not empty
        const listItem = document.createElement("li");
        listItem.textContent = value;
        listItem.classList.add("list-item"); // Add a class for styling
        listItem.addEventListener("click", function () {
            listItem.remove(); // Remove item when clicked
        });
        list.appendChild(listItem);
        input.value = ""; // Clear input after adding
        SaveToLocalStorage(); // Save changes after adding
    } else {
        alert("Bitte geben Sie einen Artikel ein.");
    }
});

// Optional: Allow pressing "Enter" to add items
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});

function SaveToLocalStorage() {
    const items = [];
    document.querySelectorAll('#list li').forEach(li => {
        items.push(li.textContent);
    });
    localStorage.setItem('todoItems', JSON.stringify(items));
}

function LoadFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('todoItems'));
    if (items) {
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.classList.add("list-item");
            listItem.addEventListener("click", function () {
                listItem.remove();
                SaveToLocalStorage(); // Save changes after removal
            });
            list.appendChild(listItem);
        });
    }
}

LoadFromLocalStorage();
