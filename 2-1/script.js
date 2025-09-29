// JavaScript to handle button clicks
const button = document.getElementById("add-button");
const input = document.getElementById("item-input");
const list = document.getElementById("list");

function updateHtml() {
    cookieCount.innerText = "Cookies: " + currentCookieCount;
    UpgradeButtonState();
}

function save(){
    localStorage.setItem("cookies", currentCookieCount);
    let upgradeData = JSON.stringify(upgradeTypes);
    localStorage.setItem("upgradeData", upgradeData);
}

function SaveButtonClicked() {
    save();
    updateHtml();
}

saveButton.addEventListener("click", SaveButtonClicked);
