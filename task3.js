//Task 1
let employeeName = prompt("Enter Employee Name:");
let employeeAge = (prompt("Enter Employee Age:"));
let employeeDepartment = prompt("Enter Employee Department:");
let employeeSalary = (prompt("Enter Employee Salary:"));

let employee = {
    name: employeeName,
    age: employeeAge,
    department: employeeDepartment,
    salary: employeeSalary
};

console.log("Employee Details:");
console.log(employee);

if (employee.salary > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible");
}


//task 2
let productName = prompt("Enter Product Name:");
let productPrice = (prompt("Enter Product Price:"));
let quantity = (prompt("Enter Quantity:"));

let totalBill = productPrice * quantity;
let finalAmount;

if (totalBill > 5000) {
    finalAmount = totalBill - (totalBill * 10 / 100);
} else {
    finalAmount = totalBill;
}

console.log("Product Name:", productName);
console.log("Product Price:", productPrice);
console.log("Quantity:", quantity);
console.log("Total Bill:", totalBill);
console.log("Final Amount:", finalAmount);

//task 3
let studentName = prompt("Enter Student Name:");
let marks = (prompt("Enter Marks:"));

let grade;

if (marks >= 90) {
    grade = "Grade A";
} else if (marks >= 75) {
    grade = "Grade B";
} else if (marks >= 50) {
    grade = "Grade C";
} else {
    grade = "Fail";
}

console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Result:", grade);

//task 4
let userName = prompt("Enter User Name:");
let accountBalance = (prompt("Enter Account Balance:"));
let withdrawalAmount = (prompt("Enter Withdrawal Amount:"));

if (withdrawalAmount <= accountBalance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

console.log("User Name:", userName);
console.log("Account Balance:", accountBalance);
console.log("Withdrawal Amount:", withdrawalAmount);

//task 5
let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");

if (enteredUsername === username && enteredPassword === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//task 6
let foodItems = [
    "sandwich",
    "Burger",
    "Biryani",
    "idly",
    "Pasta",
    "marga",
    "Noodles",
    "Ice Cream"
];

console.log("First Item:", foodItems[0]);
console.log("Last Item:", foodItems[foodItems.length - 1]);
console.log("Total Number of Items:", foodItems.length);

for (let item of foodItems) {
    console.log(item);
}

//task 7
let emp = {
    name: "Dhanush",
    age: 24,
    department: "IT",
    salary: 45000,
    experience: 1
};

for (let key in emp) {
    console.log(key + " : " + emp[key]);
}

//task 8
let signalColor = prompt("Enter Signal Color:");

switch (signalColor.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//task 9
let age = (prompt("Enter Your Age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}

//task 10
let empName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

console.log(`Welcome ${empName}`);

let status = attendance.toLowerCase() === "present"
    ? "Attendance: Present"
    : "Attendance: Absent";

console.log(status);