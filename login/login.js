document.addEventListener("DOMContentLoaded", function () {
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    if (rememberedUsername) {
            document.getElementById("name").value = rememberedUsername;
        }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        const user = localStorage.getItem(name);

        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.password === password) {
                localStorage.setItem("user", JSON.stringify(parsedUser));
                window.location.href = "https://erp-vivek.github.io/profile/";
            } else {
                alert("Incorrect password");
            }
        } else {
            alert("User not found");
        }
    });
});
