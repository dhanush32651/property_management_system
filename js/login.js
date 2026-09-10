// ===============================
// LOGIN
// ===============================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value;


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const role =
                document.getElementById(
                    "loginRole"
                ).value;


            if (
                email === "" ||
                password === ""
            ) {

                alert(
                    "Please enter all details."
                );

                return;

            }


            localStorage.setItem(
                "loggedIn",
                "true"
            );


            localStorage.setItem(
                "userRole",
                role
            );


            if (role === "owner") {

                window.location.href =
                    "owner/dashboard.html";

            } else {

                window.location.href =
                    "tenant/dashboard.html";

            }

        }
    );

}


// ===============================
// REGISTER
// ===============================

const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value;


            const email =
                document.getElementById(
                    "registerEmail"
                ).value;


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const role =
                document.getElementById(
                    "registerRole"
                ).value;


            if (
                name === "" ||
                email === "" ||
                password === ""
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }


            const user = {

                name: name,

                email: email,

                password: password,

                role: role

            };


            localStorage.setItem(
                "registeredUser",
                JSON.stringify(user)
            );


            alert(
                "Registration successful! Please login."
            );


            window.location.href =
                "login.html";

        }
    );

}