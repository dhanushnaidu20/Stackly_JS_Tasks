// TASK 1 

console.log("===== TASK 1 : Employee Management System =====");

let employees = [
    {
        name: "chitti",
        id: 131,
        salary: 30000
    },
    {
        name: "Dhanush",
        id: 135,
        salary: 60000
    },
    {
        name: "manideep",
        id: 136,
        salary: 25000
    }
];

for (let emp of employees) {
    console.log("Name:", emp.name);
    console.log("ID:", emp.id);
    console.log("Salary:", emp.salary);

    if (emp.salary >= 30000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}


// TASK 2 

console.log("\n===== TASK 2 : Student Result Portal =====");

let mark1 = 95;
let mark2 = 85;
let mark3 = 80;

let total = mark1 + mark2 + mark3;
let percentage = total / 3;

console.log("Total Marks:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


// TASK 3 

console.log("\n===== TASK 3 : E-Commerce Cart =====");

let products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill(items) {
    let totalBill = 0;

    for (let item of items) {
        totalBill += item.price;
    }

    if (totalBill > 5000) {
        totalBill = totalBill - (totalBill * 10 / 100);
        console.log("10% Discount Applied");
    }

    return totalBill;
}

console.log("Final Bill:", calculateBill(products));


// TASK 4 

console.log("\n===== TASK 4 : Login Authentication =====");

let username = "admin";
let password = "12345";

let login =
    (username === "admin" && password === "12345")
        ? "Login Success"
        : "Invalid Credentials";

console.log(login);


// TASK 5 

console.log("\n===== TASK 5 : Traffic Signal System =====");

let signal = "Green";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// TASK 6 

console.log("\n===== TASK 6 : ATM Withdrawal System =====");

let balance = 40000;
let withdrawAmount = 5000;

if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}


// TASK 7 

console.log("\n===== TASK 7 : Online Food Order =====");

function deliverFood() {
    console.log("Food Delivered");
}

function prepareFood() {
    console.log("Food Preparing");
    deliverFood();
}

function placeOrder(callback) {
    console.log("Order Received");
    callback();
}

placeOrder(prepareFood);


// TASK 8 

console.log("\n===== TASK 8 : Cashback Generator =====");

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashbackOffers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// TASK 9 

console.log("\n===== TASK 9 : Hospital Patient Check =====");

let age = 20;
let weight = 65;

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}


// TASK 10 

console.log("\n===== TASK 10 : Mini Employee Portal =====");

let employeeList = [
    {
        id: 131,
        name: "manideep",
        salary: 30000
    },
    {
        id: 135,
        name: "Dhanush",
        salary: 60000
    }
];

function addEmployee(id, name, salary) {
    employeeList.push({
        id: id,
        name: name,
        salary: salary
    });

    console.log("Employee Added");
}

function viewEmployees() {
    for (let emp of employeeList) {
        console.log(emp);
    }
}

function calculateBonus() {
    for (let emp of employeeList) {
        if (emp.salary >= 30000) {
            console.log(emp.name + " Eligible For Bonus");
        } else {
            console.log(emp.name + " Not Eligible For Bonus");
        }
    }
}

function searchEmployee(id) {
    for (let emp of employeeList) {
        if (emp.id === id) {
            console.log("Employee Found:", emp);
        }
    }
}

function deleteEmployee(id) {
    employeeList = employeeList.filter(emp => emp.id !== id);
    console.log("Employee Deleted");
}

function totalEmployees() {
    console.log("Total Employees:", employeeList.length);
}

// Function Calls

addEmployee(136, "Kiran", 45000);

console.log("\nEmployee List:");
viewEmployees();

console.log("\nBonus Status:");
calculateBonus();

console.log("\nSearch Employee:");
searchEmployee(135);

console.log("\nDelete Employee:");
deleteEmployee(131);

console.log("\nUpdated Employee List:");
viewEmployees();

totalEmployees();