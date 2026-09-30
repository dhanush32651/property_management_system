// =====================================
// TENANT DASHBOARD
// =====================================


// =====================================
// GET LOGGED-IN TENANT
// =====================================

const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"));


// =====================================
// DISPLAY TENANT NAME
// =====================================

const tenantName =
    document.getElementById("tenantName");

const tenantWelcome =
    document.getElementById("tenantWelcome");


if (loggedInUser) {

    // Display user's name
    if (tenantName) {

        tenantName.textContent =
            loggedInUser.name;

    }


    // Display welcome message
    if (tenantWelcome) {

        tenantWelcome.textContent =
            "Welcome back, " +
            loggedInUser.name +
            "!";

    }

}



// =====================================
// TENANT PAYMENT DATA
// =====================================

const tenantPayments = [

    {
        month: "September 2026",
        property: "Green Villa",
        amount: 25000,
        date: "05 Sep 2026",
        status: "Paid"
    },

    {
        month: "August 2026",
        property: "Green Villa",
        amount: 25000,
        date: "04 Aug 2026",
        status: "Paid"
    },

    {
        month: "July 2026",
        property: "Green Villa",
        amount: 25000,
        date: "05 Jul 2026",
        status: "Paid"
    },

    {
        month: "June 2026",
        property: "Green Villa",
        amount: 25000,
        date: "05 Jun 2026",
        status: "Paid"
    }

];



// =====================================
// FORMAT MONEY
// =====================================

function tenantMoney(amount) {

    return "₹" +
        Number(amount).toLocaleString("en-IN");

}



// =====================================
// RECENT PAYMENTS
// =====================================

const recentPayments =
    document.getElementById(
        "tenantRecentPayments"
    );


if (recentPayments) {

    recentPayments.innerHTML =

        tenantPayments
            .slice(0, 3)
            .map(function (payment) {

                return `

                    <tr>

                        <td>
                            ${payment.month}
                        </td>

                        <td>
                            ${tenantMoney(payment.amount)}
                        </td>

                        <td>
                            ${payment.date}
                        </td>

                        <td class="paid">
                            ${payment.status}
                        </td>

                    </tr>

                `;

            })
            .join("");

}



// =====================================
// ALL TENANT PAYMENTS
// =====================================

const tenantPaymentTable =
    document.getElementById(
        "tenantPaymentTable"
    );


if (tenantPaymentTable) {

    tenantPaymentTable.innerHTML =

        tenantPayments
            .map(function (payment) {

                return `

                    <tr>

                        <td>
                            ${payment.month}
                        </td>

                        <td>
                            ${payment.property}
                        </td>

                        <td>
                            ${tenantMoney(payment.amount)}
                        </td>

                        <td>
                            ${payment.date}
                        </td>

                        <td class="paid">
                            ${payment.status}
                        </td>

                    </tr>

                `;

            })
            .join("");

}