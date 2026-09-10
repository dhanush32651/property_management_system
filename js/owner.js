// ========================================
// PROPERTY DATA
// ========================================

let properties = JSON.parse(
    localStorage.getItem("properties")
) || [

    {
        id: 1,
        name: "Green Villa",
        location: "Hyderabad",
        type: "Villa",
        rent: 25000,
        bedrooms: 3,
        status: "Rented",
        image: "../assets/images/villa.jpg"
    },

    {
        id: 2,
        name: "Sky Apartments",
        location: "Bangalore",
        type: "Apartment",
        rent: 18000,
        bedrooms: 2,
        status: "Available",
        image: "../assets/images/apartment.jpg"
    },

    {
        id: 3,
        name: "Lake View House",
        location: "Chennai",
        type: "House",
        rent: 22000,
        bedrooms: 3,
        status: "Rented",
        image: "../assets/images/house.jpg"
    },

    {
        id: 4,
        name: "City Office",
        location: "Pune",
        type: "Commercial",
        rent: 35000,
        bedrooms: 0,
        status: "Available",
        image: "../assets/images/office.jpg"
    },

    {
        id: 5,
        name: "Sunrise Apartment",
        location: "Mumbai",
        type: "Apartment",
        rent: 28000,
        bedrooms: 2,
        status: "Available",
        image: "../assets/images/apartment-2.jpg"
    },

    {
        id: 6,
        name: "Family House",
        location: "Vijayawada",
        type: "House",
        rent: 20000,
        bedrooms: 3,
        status: "Rented",
        image: "../assets/images/house-2.jpg"
    }

];


localStorage.setItem(
    "properties",
    JSON.stringify(properties)
);


// ========================================
// TENANT DATA
// ========================================

const tenants = [

    {
        name: "Rahul Kumar",
        property: "Green Villa",
        phone: "9876543210",
        rent: 25000,
        status: "Active"
    },

    {
        name: "Priya Sharma",
        property: "Lake View House",
        phone: "9123456780",
        rent: 22000,
        status: "Active"
    },

    {
        name: "Arjun Reddy",
        property: "Family House",
        phone: "9988776655",
        rent: 20000,
        status: "Active"
    },

    {
        name: "Sneha Rao",
        property: "Sky Apartments",
        phone: "9876501234",
        rent: 18000,
        status: "Inactive"
    }

];


// ========================================
// PAYMENT DATA
// ========================================

const payments = [

    {
        tenant: "Rahul Kumar",
        property: "Green Villa",
        amount: 25000,
        date: "05 Sep 2026",
        status: "Paid"
    },

    {
        tenant: "Priya Sharma",
        property: "Lake View House",
        amount: 22000,
        date: "03 Sep 2026",
        status: "Paid"
    },

    {
        tenant: "Arjun Reddy",
        property: "Family House",
        amount: 20000,
        date: "02 Sep 2026",
        status: "Paid"
    },

    {
        tenant: "Sneha Rao",
        property: "Sky Apartments",
        amount: 18000,
        date: "01 Sep 2026",
        status: "Pending"
    }

];


// ========================================
// LEASE DATA
// ========================================

const leases = [

    {
        tenant: "Rahul Kumar",
        property: "Green Villa",
        start: "01 Jan 2026",
        end: "31 Dec 2026",
        rent: 25000,
        status: "Active"
    },

    {
        tenant: "Priya Sharma",
        property: "Lake View House",
        start: "01 Mar 2026",
        end: "28 Feb 2027",
        rent: 22000,
        status: "Active"
    },

    {
        tenant: "Arjun Reddy",
        property: "Family House",
        start: "01 Jan 2026",
        end: "31 Dec 2026",
        rent: 20000,
        status: "Active"
    },

    {
        tenant: "Sneha Rao",
        property: "Sky Apartments",
        start: "01 Apr 2025",
        end: "31 Mar 2026",
        rent: 18000,
        status: "Expired"
    }

];


// ========================================
// FORMAT MONEY
// ========================================

function formatMoney(amount) {

    return "₹" +
        Number(amount).toLocaleString("en-IN");

}


// ========================================
// PROPERTY CARD
// ========================================

function propertyCard(property) {

    return `

        <div class="property-card">

            <img
                src="${property.image}"
                alt="${property.name}"
            >

            <div class="property-info">

                <h3>
                    ${property.name}
                </h3>

                <p>
                    📍 ${property.location}
                </p>

                <p>
                    🏠 ${property.type}
                </p>

                <p>
                    🛏 ${property.bedrooms}
                    bedroom(s)
                </p>

                <span class="property-rent">
                    ${formatMoney(property.rent)}
                    / month
                </span>

                <span class="status-badge">
                    ${property.status}
                </span>

            </div>

        </div>

    `;

}


// ========================================
// DISPLAY PROPERTIES
// ========================================

function displayProperties(
    list = properties,
    elementId = "allProperties"
) {

    const container =
        document.getElementById(elementId);

    if (!container) {
        return;
    }


    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                No properties found.

            </div>

        `;

        return;

    }


    container.innerHTML =
        list.map(propertyCard).join("");

}


// ========================================
// DASHBOARD RECENT PROPERTIES
// ========================================

const recentProperties =
    document.getElementById(
        "recentProperties"
    );


if (recentProperties) {

    recentProperties.innerHTML =
        properties
            .slice(0, 3)
            .map(propertyCard)
            .join("");

}


// ========================================
// DASHBOARD STATISTICS
// ========================================

const propertyCount =
    document.getElementById(
        "propertyCount"
    );


if (propertyCount) {

    propertyCount.textContent =
        properties.length;

}


const tenantCount =
    document.getElementById(
        "tenantCount"
    );


if (tenantCount) {

    tenantCount.textContent =
        tenants.length;

}


const paymentAmount =
    document.getElementById(
        "paymentAmount"
    );


if (paymentAmount) {

    const total =
        payments
            .filter(
                payment =>
                    payment.status === "Paid"
            )
            .reduce(
                (sum, payment) =>
                    sum + payment.amount,
                0
            );


    paymentAmount.textContent =
        formatMoney(total);

}


const leaseCount =
    document.getElementById(
        "leaseCount"
    );


if (leaseCount) {

    leaseCount.textContent =
        leases.filter(
            lease =>
                lease.status === "Active"
        ).length;

}


// ========================================
// RECENT PAYMENTS
// ========================================

const recentPaymentTable =
    document.getElementById(
        "recentPaymentTable"
    );


if (recentPaymentTable) {

    recentPaymentTable.innerHTML =
        payments.slice(0, 4).map(
            payment => `

                <tr>

                    <td>
                        ${payment.tenant}
                    </td>

                    <td>
                        ${payment.property}
                    </td>

                    <td>
                        ${formatMoney(payment.amount)}
                    </td>

                    <td>
                        ${payment.date}
                    </td>

                    <td class="${
                        payment.status === "Paid"
                        ? "paid"
                        : "pending"
                    }">

                        ${payment.status}

                    </td>

                </tr>

            `
        ).join("");

}


// ========================================
// PROPERTIES PAGE
// ========================================

const propertySearch =
    document.getElementById(
        "propertySearch"
    );


const propertyFilter =
    document.getElementById(
        "propertyFilter"
    );


function filterProperties() {

    if (!propertySearch) {
        return;
    }


    const search =
        propertySearch.value
            .toLowerCase();


    const filter =
        propertyFilter.value;


    const filtered =
        properties.filter(
            property => {

                const matchesSearch =

                    property.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    property.location
                        .toLowerCase()
                        .includes(search)

                    ||

                    property.type
                        .toLowerCase()
                        .includes(search);


                const matchesFilter =

                    filter === "all"

                    ||

                    property.status === filter;


                return (
                    matchesSearch &&
                    matchesFilter
                );

            }
        );


    displayProperties(
        filtered,
        "allProperties"
    );

}


if (propertySearch) {

    propertySearch.addEventListener(
        "input",
        filterProperties
    );

}


if (propertyFilter) {

    propertyFilter.addEventListener(
        "change",
        filterProperties
    );

}


displayProperties();


// ========================================
// TENANT TABLE
// ========================================

const tenantTable =
    document.getElementById(
        "tenantTable"
    );


function displayTenants(
    list = tenants
) {

    if (!tenantTable) {
        return;
    }


    tenantTable.innerHTML =
        list.map(
            tenant => `

                <tr>

                    <td>

                        <div class="table-profile">

                            <img
                                src="../assets/images/tenant.jpg"
                            >

                            <div>

                                <strong>
                                    ${tenant.name}
                                </strong>

                            </div>

                        </div>

                    </td>

                    <td>
                        ${tenant.property}
                    </td>

                    <td>
                        ${tenant.phone}
                    </td>

                    <td>
                        ${formatMoney(tenant.rent)}
                    </td>

                    <td>

                        <span class="status-badge">
                            ${tenant.status}
                        </span>

                    </td>

                </tr>

            `
        ).join("");

}


displayTenants();


// ========================================
// TENANT SEARCH
// ========================================

const tenantSearch =
    document.getElementById(
        "tenantSearch"
    );


if (tenantSearch) {

    tenantSearch.addEventListener(
        "input",
        function() {

            const search =
                tenantSearch.value
                    .toLowerCase();


            const filtered =
                tenants.filter(
                    tenant =>
                        tenant.name
                            .toLowerCase()
                            .includes(search)
                        ||
                        tenant.property
                            .toLowerCase()
                            .includes(search)
                );


            displayTenants(filtered);

        }
    );

}


// ========================================
// PAYMENT PAGE
// ========================================

const paymentTable =
    document.getElementById(
        "paymentTable"
    );


if (paymentTable) {

    paymentTable.innerHTML =
        payments.map(
            payment => `

                <tr>

                    <td>
                        ${payment.tenant}
                    </td>

                    <td>
                        ${payment.property}
                    </td>

                    <td>
                        ${formatMoney(payment.amount)}
                    </td>

                    <td>
                        ${payment.date}
                    </td>

                    <td class="${
                        payment.status === "Paid"
                        ? "paid"
                        : "pending"
                    }">

                        ${payment.status}

                    </td>

                </tr>

            `
        ).join("");

}


// ========================================
// PAYMENT STATISTICS
// ========================================

const totalReceived =
    document.getElementById(
        "totalReceived"
    );


if (totalReceived) {

    const total =
        payments
            .filter(
                p => p.status === "Paid"
            )
            .reduce(
                (sum, p) =>
                    sum + p.amount,
                0
            );


    totalReceived.textContent =
        formatMoney(total);

}


const pendingAmount =
    document.getElementById(
        "pendingAmount"
    );


if (pendingAmount) {

    const pending =
        payments
            .filter(
                p => p.status === "Pending"
            )
            .reduce(
                (sum, p) =>
                    sum + p.amount,
                0
            );


    pendingAmount.textContent =
        formatMoney(pending);

}


const paymentRecords =
    document.getElementById(
        "paymentRecords"
    );


if (paymentRecords) {

    paymentRecords.textContent =
        payments.length;

}


// ========================================
// LEASE TABLE
// ========================================

const leaseTable =
    document.getElementById(
        "leaseTable"
    );


if (leaseTable) {

    leaseTable.innerHTML =
        leases.map(
            lease => `

                <tr>

                    <td>
                        ${lease.tenant}
                    </td>

                    <td>
                        ${lease.property}
                    </td>

                    <td>
                        ${lease.start}
                    </td>

                    <td>
                        ${lease.end}
                    </td>

                    <td>
                        ${formatMoney(lease.rent)}
                    </td>

                    <td>

                        <span class="
                            status-badge
                            ${
                                lease.status === "Expired"
                                ? "expired"
                                : ""
                            }
                        ">

                            ${lease.status}

                        </span>

                    </td>

                </tr>

            `
        ).join("");

}


// ========================================
// ADD PROPERTY FORM
// ========================================

const propertyForm =
    document.getElementById(
        "propertyForm"
    );


if (propertyForm) {

    propertyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "propertyName"
                ).value;


            const location =
                document.getElementById(
                    "propertyLocation"
                ).value;


            const type =
                document.getElementById(
                    "propertyType"
                ).value;


            const rent =
                Number(
                    document.getElementById(
                        "propertyRent"
                    ).value
                );


            const bedrooms =
                Number(
                    document.getElementById(
                        "propertyBedrooms"
                    ).value
                ) || 0;


            const status =
                document.getElementById(
                    "propertyStatus"
                ).value;


            const description =
                document.getElementById(
                    "propertyDescription"
                ).value;


            const images = [

                "../assets/images/villa.jpg",

                "../assets/images/apartment.jpg",

                "../assets/images/house.jpg",

                "../assets/images/office.jpg",

                "../assets/images/apartment-2.jpg",

                "../assets/images/house-2.jpg"

            ];


            const newProperty = {

                id: Date.now(),

                name: name,

                location: location,

                type: type,

                rent: rent,

                bedrooms: bedrooms,

                status: status,

                description: description,

                image:
                    images[
                        properties.length %
                        images.length
                    ]

            };


            properties.push(
                newProperty
            );


            localStorage.setItem(
                "properties",
                JSON.stringify(properties)
            );


            alert(
                "Property added successfully!"
            );


            window.location.href =
                "properties.html";

        }
    );

}