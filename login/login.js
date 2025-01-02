document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;

    // Send the password to your Replit server
    const response = await fetch("https://e98698cf-e41b-4e75-a52c-4a140dffbf4e-00-2qukwshg67uyn.sisko.replit.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password }),
    });

    const result = await response.json();
    if (result.success) {
        alert(result.message);
        window.location.href = "attendance.html"; // Redirect to another page
    } else {
        alert(result.message);
    }
});
