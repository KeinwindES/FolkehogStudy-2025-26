const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");


async function SubmitLogin() {
    const username = usernameInput.value;
  const password = passwordInput.value;
  console.log("jkasdfjfdka")
    const message = {
        username: username,
        password: password,
    }

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (!response.ok) {
            console.error(await response.json())
            throw new Error("Login failed");
        }

        const data = await response.json();
        console.log("Response", data)
    } catch (error) {
        console.error("Error:", error);
    }
}

loginButton.addEventListener("click", SubmitLogin);
