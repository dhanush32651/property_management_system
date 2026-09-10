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
        Number(amount)
            .toLocaleString("en-IN");

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
            .map(
                payment => `

                    <tr>

                        <td>
                            ${payment.month}
                        </td>

                        <td>
                            ${tenantMoney(
                                payment.amount
                            )}
                        </td>

                        <td>
                            ${payment.date}
                        </td>

                        <td class="paid">
                            ${payment.status}
                        </td>

                    </tr>

                `
            )
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
            .map(
                payment => `

                    <tr>

                        <td>
                            ${payment.month}
                        </td>

                        <td>
                            ${payment.property}
                        </td>

                        <td>
                            ${tenantMoney(
                                payment.amount
                            )}
                        </td>

                        <td>
                            ${payment.date}
                        </td>

                        <td class="paid">
                            ${payment.status}
                        </td>

                    </tr>

                `
            )
            .join("");

}