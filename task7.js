// Task 1

let students= [
    {
        name: "Datta",
        id: 101,
        mark: 85
    },
    {
        name: "Dhanush",
        id: 102,
        mark: 45
    },
    {
        name: "Manideep",
        id: 103,
        mark: 25
    }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

for (let j = 0; j < students.length; j++) {
    console.log(students[j].name);
}

for (let k = 0; k < students.length; k++) {
    if (students[k].id === 102) {
        console.log(students[k]);
    }
}

for (let l = 0; l < students.length; l++) {
    if (students[l].mark >= 35) {
        console.log(students[l]);
    }
}

let totalStudentsCount = students.length;
console.log(totalStudentsCount);

// Task 2

let emp = [
    {
        name: "datta",
        salary: 30000
    },
    {
        name: "Dhanush",
        salary: 45000
    },
    {
        name: "Manideep",
        salary: 60000
    }
];

let highestSalaryValue = emp[0].salary;

for (let i = 1; i < emp.length; i++) {
    if (emp[i].salary > highestSalaryValue) {
        highestSalaryValue = emp[i].salary;
    }
}

console.log(highestSalaryValue);

let lowestSalaryValue = emp[0].salary;

for (let j = 1; j < emp.length; j++) {
    if (emp[j].salary < lowestSalaryValue) {
        lowestSalaryValue = emp[j].salary;
    }
}

console.log(lowestSalaryValue);

for (let k = 0; k < emp.length; k++) {
    emp[k].salary += 5000;
}

console.log(emp);

let totalSalaryAmount = 0;

for (let l = 0; l < emp.length; l++) {
    totalSalaryAmount += emp[l].salary;
}

console.log(totalSalaryAmount);

for (let m = 0; m < emp.length; m++) {
    if (emp[m].salary > 40000) {
        console.log(emp[m]);
    }
}

// Task 3

let Items = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

for (let i = 0; i < Items.length; i++) {
    console.log(Items[i].name);
}

let totalBill = 0;

for (let i = 0; i < Items.length; i++) {
    totalBill += Items[i].price;
}

console.log(totalBill);

for (let i = 0; i < Items.length; i++) {
    if (Items[i].name === "Mouse") {
        console.log(Items[i]);
    }
}

for (let i = 0; i < Items.length; i++) {
    Items[i].price -= Items[i].price * 10 / 100;
}

console.log(Items);

let finalBill= 0;

for (let i = 0; i < Items.length; i++) {
    finalBill += Items[i].price;
}

console.log(finalBill);

// Task 4

let bankAccount = {
    name: "Datta",
    balance: 50000
};

bankAccount.balance += 10000;

bankAccount.balance -= 5000;

console.log(bankAccount.balance);

if (bankAccount.balance < 20000) {
    console.log("Balance is below ₹20,000");
} else {
    console.log("Balance is above ₹20,000");
}

console.log(bankAccount);

// Task 5

let userName = prompt("Enter Username");
let password = prompt("Enter Password");

let correctName = "admin";
let correctPassword = "12345";

if (userName == correctName && password == correctPassword) {
    console.log("Welcome");
    alert("Welcome");
} else {
    console.log("Invalid Username or Password");
    alert("Invalid Username or Password");
}

// Task 6

let Color = prompt("Enter Signal Color (Red, Yellow, Green)");

switch (Color.toLowerCase()) {
    case "red":
        console.log("Stop");
        alert("Stop");
        break;

    case "yellow":
        console.log("Ready");
        alert("Ready");
        break;

    case "green":
        console.log("Go");
        alert("Go");
        break;

    default:
        console.log("Invalid Signal");
        alert("Invalid Signal");
}

// Task 7

let Balance = 50000;

let atm = Number(prompt("ATM Menu\n1. Balance\n2. Deposit\n3. Withdraw\n4. Exit"));

switch (atm) {
    case 1:
        console.log("Balance: ₹" + Balance);
        alert("Balance: ₹" + Balance);
        break;

    case 2:
        let deposit = Number(prompt("Enter Deposit Amount"));
        Balance += deposit;
        console.log("Updated Balance: ₹" + Balance);
        alert("Updated Balance: ₹" + Balance);
        break;

    case 3:
        let withdraw = Number(prompt("Enter Withdraw Amount"));
        Balance -= withdraw;
        console.log("Updated Balance: ₹" + Balance);
        alert("Updated Balance: ₹" + Balance);
        break;

    case 4:
        console.log("Thank You");
        alert("Thank You");
        break;

    default:
        console.log("Invalid Option");
        alert("Invalid Option");
}

// Task 8

let Scores = [10, 25, 40, 60, 80, 100];

let highestScore = Scores[0];

for (let i = 1; i < Scores.length; i++) {
    if (Scores[i] > highestScore) {
        highestScore = Scores[i];
    }
}

console.log("Highest Score:", highestScore);

let lowestScore = Scores[0];

for (let i = 1; i < Scores.length; i++) {
    if (Scores[i] < lowestScore) {
        lowestScore = Scores[i];
    }
}

console.log("Lowest Score:", lowestScore);

let total = 0;

for (let i = 0; i < Scores.length; i++) {
    total += Scores[i];
}

console.log("Total Score:", total);

let average= total / Scores.length;

console.log("Average Score:", average);

// Task 9

let Age = Number(prompt("Enter Your Age"));

let confirmation= confirm("Do you want to book the movie ticket?");

if (confirmation) {
    if (Age >= 18) {
        console.log("Allow Movie");
        alert("Allow Movie");
    } else {
        console.log("Not Allowed");
        alert("Not Allowed");
    }
} else {
    console.log("Ticket Booking Cancelled");
    alert("Ticket Booking Cancelled");
}

// Task 10

let token = Number(prompt("Enter Token Number (1-3)"));

switch (token) {
    case 1:
        console.log("Doctor A");
        alert("Doctor A");
        break;

    case 2:
        console.log("Doctor B");
        alert("Doctor B");
        break;

    case 3:
        console.log("Doctor C");
        alert("Doctor C");
        break;

    default:
        console.log("Invalid Token");
        alert("Invalid Token");
}

// Task 11

let Basket = ["Apple", "Orange", "Banana"];

console.log(Basket);

Basket.push("Mango");
console.log(Basket);

Basket.pop();
console.log(Basket);

Basket.shift();
console.log(Basket);

Basket.unshift("Grapes");
console.log(Basket);

Basket.splice(1, 1, "Pineapple");
console.log(Basket);

let slice = Basket.slice(0, 2);
console.log(slice);

console.log(Basket);

// Task 12

let Employees = [
    {
        name: "A",
        salary: 20000
    },
    {
        name: "B",
        salary: 35000
    },
    {
        name: "C",
        salary: 50000
    },
    {
        name: "D",
        salary: 70000
    }
];

let updatedSalaries = Employees.map(function (employeeData) {
    return {
        name: employeeData.name,
        salary: employeeData.salary + 5000
    };
});

console.log(updatedSalaries);

let salaryFilter = Employees.filter(function (employeeInfo) {
    return employeeInfo.salary > 30000;
});

console.log(salaryFilter);

let salarySearch = Employees.find(function (employeeRecord) {
    return employeeRecord.salary === 50000;
});

console.log(salarySearch);

let totalSalary = Employees.reduce(function (totalAmount, employeeSalary) {
    return totalAmount + employeeSalary.salary;
}, 0);

console.log(totalSalary);

let salaryCheck = Employees.some(function (employeeValue) {
    return employeeValue.salary > 60000;
});

console.log(salaryCheck);

let minimumSalaryCheck = Employees.every(function (employeeEntry) {
    return employeeEntry.salary > 15000;
});

console.log(minimumSalaryCheck);

// Task 13

let company = " Stackly IT ";

let upperCase = company.toUpperCase();
console.log(upperCase);

let lowerCase = company.toLowerCase();
console.log(lowerCase);

let trimmed = company.trim();
console.log(trimmed);

let replaced = company.replace("IT", "Software");
console.log(replaced);

let wordExists = company.includes("Stackly");
console.log(wordExists);

let split= company.trim().split(" ");
console.log(split);

// Task 14

let timer = setInterval(function () {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
    console.log("Clock Stopped");
}, 10000);



// Task 15
console.log("---------------------Task 15----------------------")
fetch("https://fakestoreapi.com/products")
    .then(function (responseData) {
        return responseData.json();
    })
    .then(function (productList) {

        console.log("Product Titles:");
        for (let i = 0; i < productList.length; i++) {
            console.log(productList[i].title);
        }

        console.log("Prices:");
        for (let i = 0; i < productList.length; i++) {
            console.log(productList[i].price);
        }

        console.log("Products Costing More Than ₹100:");
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].price > 100) {
                console.log(productList[i]);
            }
        }

        console.log("Total Products:");
        console.log(productList.length);

        console.log("Category Names:");
        for (let i = 0; i < productList.length; i++) {
            console.log(productList[i].category);
        }

    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    });




    // Final Task
console.log("---------------------Final Task----------------------")
let employeeList = [
    {
        id: 101,
        name: "Datta",
        salary: 30000
    },
    {
        id: 102,
            name: "Dhanush",
        salary: 45000
    },
    {
        id: 103,
        name: "Manideep",
        salary: 60000
    }
];

function viewEmp() {
    console.log(employeeList);
}

function searchEmp() {
    let searchId = Number(prompt("Enter Employee ID"));

    let employeeData = employeeList.find(function (employeeRecord) {
        return employeeRecord.id === searchId;
    });

    if (employeeData) {
        console.log(employeeData);
    } else {
        console.log("Employee Not Found");
    }
}

function addBonus() {
    let bonusEmployees = employeeList.map(function (employeeValue) {
        return {
            id: employeeValue.id,
            name: employeeValue.name,
            salary: employeeValue.salary + 5000
        };
    });

    console.log(bonusEmployees);
}

function highSalary() {
    let maximumSalary = employeeList.reduce(function (highestValue, employeeData) {
        return employeeData.salary > highestValue ? employeeData.salary : highestValue;
    }, employeeList[0].salary);

    console.log("Highest Salary:", maximumSalary);
}

function lowSalary() {
    let minimumSalary = employeeList.reduce(function (lowestValue, employeeData) {
        return employeeData.salary < lowestValue ? employeeData.salary : lowestValue;
    }, employeeList[0].salary);

    console.log("Lowest Salary:", minimumSalary);
}

function totalSal() {
    let salaryTotal = employeeList.reduce(function (totalValue, employeeData) {
        return totalValue + employeeData.salary;
    }, 0);

    console.log("Total Salary:", salaryTotal);
}

function salFilter() {
    let filteredEmployees = employeeList.filter(function (employeeData) {
        return employeeData.salary > 40000;
    });

    console.log(filteredEmployees);
}

function empReport() {
    employeeList.forEach(function (employeeInfo) {
        console.log(`ID: ${employeeInfo.id} | Name: ${employeeInfo.name} | Salary: ₹${employeeInfo.salary}`);
    });
}

function currentDateTime() {
    let today = new Date();
    console.log(today.toLocaleString());
}

function fetchEmp() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (responseData) {
            return responseData.json();
        })
        .then(function (userData) {
            console.log(userData);
        })
        .catch(function (errorData) {
            console.log(errorData);
        });
}

let menuOption = Number(prompt(
`Employee Payroll System

1. View Employees
2. Search Employee by ID
3. Add Bonus
4. Find Highest Salary
5. Find Lowest Salary
6. Calculate Total Salary
7. Filter Salary Above ₹40,000
8. Print Employee Report
9. Display Current Date & Time
10. Fetch Employee Data from API
11. Exit

Enter Your Choice`
));

switch (menuOption) {
    case 1:
        viewEmp();
        break;

    case 2:
        searchEmp();
        break;

    case 3:
        addBonus();
        break;

    case 4:
        highSalary();
        break;

    case 5:
        lowSalary();
        break;

    case 6:
        totalSal();
        break;

    case 7:
        salFilter();
        break;

    case 8:
        empReport();
        break;

    case 9:
        currentDateTime();
        break;

    case 10:
        fetchEmp();
        break;

    case 11:
        console.log("Thank You");
        break;

    default:
        console.log("Invalid Choice");
}