// ===============================
// LOGOUT
// ===============================

function logout() {

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("userRole");

}


// ===============================
// MESSAGE SYSTEM
// ===============================

const messageForm =
    document.getElementById("messageForm");

if (messageForm) {

    messageForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const input =
                document.getElementById(
                    "messageInput"
                );

            const message =
                input.value.trim();

            if (message === "") {
                return;
            }


            const chat =
                document.getElementById(
                    "chatMessages"
                );


            const newMessage =
                document.createElement("div");

            newMessage.className =
                "message sent";


            newMessage.innerHTML = `

                <p>${message}</p>

                <small>
                    Just now
                </small>

            `;


            chat.appendChild(newMessage);

            input.value = "";

            chat.scrollTop =
                chat.scrollHeight;

        }
    );

}