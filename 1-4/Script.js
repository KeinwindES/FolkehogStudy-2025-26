let currentCookieCount = 1;
currentCookieCount = Number(localStorage.getItem("cookies"));
updateHtml();

function updateHtml() {
    cookieCount.innerText = "Cookies: " + currentCookieCount;
}

function save(){
    localStorage.setItem("cookies", currentCookieCount);
    let upgradeData = JSON.stringify(upgradeTypes);
    localStorage.setItem("upgradeData", upgradeData);
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
    upgradeTypes.forEach(upgrade => upgrade.upgradeLevel = 0);
})

let upgradeTypes = [
    { name: "👩‍🦳", updateFreq: 1, amount: 0.1, upgradeLevel: 0, },
    { name: "👨‍🌾", updateFreq: 5, amount: 5, upgradeLevel: 0 },
]
let storedData = localStorage.getItem("upgradeData");
if (storedData != null) {
    upgradeTypes = JSON.parse(storedData);
}

for (let i = 0; i < upgradeTypes.length; i++) {
    const upgradeType = upgradeTypes[i];
    let upgradeContainer = document.createElement("div");
    upgradeContainer.innerHTML = upgradeType.name;
    let upgradeButton = document.createElement("button");

    upgradeButton.addEventListener("click", () => {
        upgradeType.upgradeLevel += 1;
        upgradeButton.innerText = "Buy Upgrade (" + upgradeType.upgradeLevel + ")";
    });

    upgradeButton.innerText= "Buy Upgrade";
    upgradeContainer.appendChild(upgradeButton);

    upgrades.appendChild(upgradeContainer);

    setInterval(() => {
        currentCookieCount += upgradeType.upgradeLevel * upgradeType.amount;
        save();
        updateHtml();
    }, 1000 * upgradeType.updateFreq);
}