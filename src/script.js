document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.textContent = "Please enter username and password.";
    } else {
        message.textContent = "Login information submitted.";
    }
});