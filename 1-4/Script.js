let currentCookieCount = 1;
currentCookieCount = Number(localStorage.getItem("cookies"));
updateHtml();

function updateHtml() {
    cookieCount.innerText = "Cookies: " + currentCookieCount;
}

function save(){
    localStorage.setItem("cookies", currentCookieCount);
}

function CookieClicked() {
    currentCookieCount++;
    save();
    updateHtml();
}

cookieButton.addEventListener("click", CookieClicked)

resetButton.addEventListener("click", () => {
    currentCookieCount = 1;
    save();
    updateHtml();
})

let upgradeTypes = [
    { name: "👩‍🦳", updateFreq: 5, amount: 1 },
    { name: "👨‍🌾", updateFreq: 10, amount: 5 },
]

for (let i = 0; i < upgradeTypes.length; i++) {
    const upgradeType = upgradeTypes[i];
    let upgradeContainer = document.createElement("div");
    upgradeContainer.innerHTML = upgradeType.name;

    let upgradeButton = document.createElement("button");
    upgradeButton.innerText= "Buy Upgrade";
    upgradeContainer.appendChild(upgradeButton);

    upgrades.appendChild(upgradeContainer);
}