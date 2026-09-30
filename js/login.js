// Login functionality

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get login values
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        const role = document.getElementById("loginRole").value;

        // Check empty fields
        if (email === "" || password === "") {
            alert("Please enter email and password.");
            return;
        }

        // Get registered users from Local Storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find matching user
        const user = users.find(function (u) {
            return u.email === email &&
                   u.password === password &&
                   u.role === role;
        });

        // If user exists
        if (user) {

            // Save logged-in user
            localStorage.setItem("loggedInUser", JSON.stringify(user));

            alert("Login successful!");

            // Redirect according to role
            if (role === "owner") {

                window.location.href = "owner/dashboard.html";

            } else if (role === "tenant") {

                window.location.href = "tenant/dashboard.html";

            }

        } else {

            alert("Invalid email, password, or role.");
        }

    });

});