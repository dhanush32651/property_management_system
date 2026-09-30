// Registration functionality

document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    if (!registerForm) {
        return;
    }

    registerForm.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get values from the form
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const role = document.getElementById("registerRole").value;

        // Check empty fields
        if (name === "" || email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        // Get existing users from Local Storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        const existingUser = users.find(function (user) {
            return user.email === email;
        });

        if (existingUser) {
            alert("An account with this email already exists.");
            return;
        }

        // Create new user
        const newUser = {
            name: name,
            email: email,
            password: password,
            role: role
        };

        // Add new user to users array
        users.push(newUser);

        // Save users in Local Storage
        localStorage.setItem("users", JSON.stringify(users));

        // Show success message
        alert("Account created successfully!");

        // Go to login page
        window.location.href = "login.html";
    });

});