let currentCookieCount = 1;
currentCookieCount = Number(localStorage.getItem("cookies"));


function updateHtml() {
    cookieCount.innerText = "Cookies: " + currentCookieCount;
    UpgradeButtonState();
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
    localStorage.clear();
    upgradeTypes = initUpgrades();
    save();
    updateHtml();
    upgradeTypes.forEach(upgrade => upgrade.upgradeLevel = 0);
    location.reload();
})
let upgradeTypes = initUpgrades();

function initUpgrades() {
        let upgradeTypes = [
        { name: "👩‍🦳", updateFreq: 1, amount: 1, upgradeLevel: 0, upgradeCost: 10 },
        { name: "👨‍🌾", updateFreq: 1, amount: 5, upgradeLevel: 0, upgradeCost: 50 },
        { name: "👩‍🍳", updateFreq: 1, amount: 20, upgradeLevel: 0, upgradeCost: 100 },
        { name: "👩‍💻", updateFreq: 1, amount: 10, upgradeLevel: 0, upgradeCost: 500 },
        { name: "👩‍🚀", updateFreq: 1, amount: 100, upgradeLevel: 0, upgradeCost: 1000 },
        { name: "👩‍🔬", updateFreq: 1, amount: 200, upgradeLevel: 0, upgradeCost: 5000 },
    ]
    let storedData = localStorage.getItem("upgradeData");
    if (storedData != null) {
        upgradeTypes = JSON.parse(storedData);
    }   
    return upgradeTypes;
}

let upgradeButtons = []

for (let i = 0; i < upgradeTypes.length; i++) {
    const upgradeType = upgradeTypes[i];
    let upgradeContainer = document.createElement("div");
    upgradeContainer.innerHTML = upgradeType.name;
    let upgradeButton = document.createElement("button");

    upgradeButton.addEventListener("click", () => {
        if (currentCookieCount < upgradeType.upgradeCost) return;
        currentCookieCount -= upgradeType.upgradeCost;
        upgradeType.upgradeLevel += 1;
        upgradeButton.innerText = "Buy Upgrade (" + upgradeType.upgradeLevel + ")";
    });

    upgradeButton.innerText= "Buy Upgrade";
    upgradeContainer.appendChild(upgradeButton);

    upgrades.appendChild(upgradeContainer);
    upgradeButtons.push(upgradeButton);

    setInterval(() => {
        currentCookieCount += upgradeType.upgradeLevel * upgradeType.amount;
        save();
        updateHtml();
    }, 1000 * upgradeType.updateFreq);
}

function UpgradeButtonState() {
    for (let index = 0; index < upgradeButtons.length; index++) {
        const button = upgradeButtons[index];
        const upgradeType = upgradeTypes[index];

        button.disabled = currentCookieCount < upgradeType.upgradeCost;
        button.innerText = "Buy Upgrade (" + upgradeType.upgradeLevel + ")";
        
}

function SaveButtonClicked() {
    save();
    updateHtml();
}

saveButton.addEventListener("click", SaveButtonClicked);

save();
updateHtml();
