// Predefined staff password
const staffPassword = "vivek.ent.123"; // Replace with your actual password

// Form submission handler
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === staffPassword) {
        // Success Alert
        Swal.fire({
            title: 'Access Granted!',
            text: 'Redirecting to the attendance page...',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            // Redirect to attendance page
            window.location.href = "../attendence2025.html"; // Replace with your actual attendance page URL
        });
    } else {
        // Error Alert
        Swal.fire({
            title: 'Access Denied!',
            text: 'Incorrect password. Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry'
        });
    }
});
