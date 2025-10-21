function isVibrationSupported() {
    return 'vibrate' in navigator;
}

// Example usage:
function vibration() {
    if (isVibrationSupported()) {
        return "Vibration API is supported.";
        navigator.vibrate(200); // vibrates for 200ms
    } else {
        return "Vibration API is not supported."; 
    }
}
if (isVibrationSupported()) {
    navigator.vibrate(200); // vibrates for 200ms
    navigator.vibrate([200, 100, 200]); // vibrate, pause, vibrate
} else {
    console.log("Vibration API is not supported on this device.");
}

document.getElementById('vibrateButton').addEventListener('click', function() {
    if (isVibrationSupported()) {
        navigator.vibrate(200);
        document.getElementById('status').textContent = "Device vibrated for 200ms.";
    } else {
        document.getElementById('status').textContent = "Vibration API is not supported on this device.";
    }
});