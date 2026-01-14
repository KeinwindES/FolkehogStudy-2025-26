// Contains the password (from a html input field)
let password = "";
// Contains the username (from a html input field)
let username = "";


// Shpuld run when submitt button is clicked
function Submit() {
    // Get the username and password from the html input fields
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    // Send the username and password to the server
    window.location.href = `YouLoggedIn.html`;
    // Check if the username and password are correct
    if (username === "admin" && password === "admin") {
            window.location.href = `Admin.html`;
    }
}
