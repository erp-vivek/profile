document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = {
            name: name,
            email: email,
            password: password,
        };

        localStorage.setItem(name, JSON.stringify(user));
        alert("Registration successful! Please login.");
        window.location.href = "login.html";
    });
});