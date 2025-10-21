navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    document.getElementById("battery-charge").textContent = `Battery charging? ${battery.charging ? "Yes" : "No"}`;
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    document.getElementById("battery-level").textContent = `Battery level: ${battery.level * 100}%`;
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    document.getElementById("battery-charging-time").textContent = `Battery charging time: ${battery.chargingTime} seconds`;
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    document.getElementById("battery-discharging-time").textContent = `Battery discharging time: ${battery.dischargingTime} seconds`;
  }
});
navigator.getBattery().then((battery) => {
  battery.addEventListener("levelchange", () => {
    checkBatteryLevel(battery);
  });
  checkBatteryLevel(battery);
});
function checkBatteryLevel(battery) {
  if (battery.level == 1.0) {
    document.getElementById("battery-info").textContent = "Battery is fully charged.";
  } else if (battery.level < 0.25) {
    document.getElementById("battery-info").textContent = "Battery is low.";
  } else if (battery.level == 0.1) {
    document.getElementById("battery-info").textContent = "GO AND CHARGE IT IDIOT.";
  } else {
    document.getElementById("battery-info").textContent = "Battery level is sufficient.";
  }
}