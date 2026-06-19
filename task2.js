//Task 1

let empName = "dhanush naidu";
const empID = "EMP101";
let department = "Development";
let salary = 50000;
const isPerEmployee = true;

console.log(`Employee Details
----------------
Name       : ${empName}
ID         : ${empID}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPerEmployee}`);

// Task 2
let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

console.log("first Skill :", skills[0]);
console.log("third Skill :", skills[2]);
console.log("last Skill  :", skills[skills.length - 1]);
console.log("total Skills:", skills.length);

// Task 3
const company = {
    companyName: "Stackly",
    location: "Bangalore",
    employees: 150,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
};

console.log("company Name      :", company.companyName);
console.log("location          :", company.location);
console.log("second technology :", company.technologies[1]);
console.log("total technologies:", company.technologies.length);

// Task 4
let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("basic Salary :", basicSalary);
console.log("bonus        :", bonus);
console.log("total Salary :", totalSalary);
console.log("tax (10%)    :", tax);
console.log("final Salary :", finalSalary);

// Task 5
let attendance = 92;
let result = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log("attendance :", attendance);
console.log("status     :", result);

// Task 6
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("login successful");
} else {
    console.log("invalid credentials");
}

// Task 7
let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;
let totalBill = productPrice * quantity;

console.log("product  :", productName);
console.log("price    :", productPrice);
console.log("quantity :", quantity);
console.log("total    :", totalBill);

// Task 8
let visitors = 100;

console.log("initial value :", visitors); 
console.log("pre increment :", ++visitors); 
console.log("post increment:", visitors++); 
console.log("After Post Increment:", visitors); 
console.log("pre decrement :", --visitors); 
console.log("post decrement:", visitors--); 
console.log("After Post decrement:", visitors); 

// Task 9
console.log(10 == "10");    // true

console.log(10 === "10");   // false

console.log(20 != "20");    // false

console.log(20 !== "20");   // true

console.log(5 < 10);        // true

console.log(15 >= 20);      // false

console.log(100 <= 100);    // true

// Task 10
let en = prompt("Enter Employee Name");
let ea = prompt("Enter Employee Age");
let jc = confirm("Do you want to join our company?");
if (jc) {
    alert("Welcome " + en);
} else {
    alert("Thank You");
}

//------------------------------------------------------------------------------------------------//
// final task
let un = prompt("Enter Username");
let pw = prompt("Enter Password");

let join = confirm("Do you want to access Employee Portal?");

if (join) {

    let emp = {
        name: "dhanush naidu",
        id: "EMP101",
        dept: "Development",
        exp: 1,
        sal: 50000
    };

    let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

    let att = 85;
    let examStatus = att >= 75 ? "Eligible" : "Not Eligible";

    let loginStatus =
        (un === "admin" && pw === "12345")
            ? "success"
            : "failed";

    let bonus = emp.sal * 0.10;
    let finalSalary = emp.sal + bonus;

    let company = {
        name: "Stackly",
        location: "Bangalore"
    };

    alert("Welcome " + emp.name);

    console.log("==============================");
    console.log("      EMPLOYEE PORTAL");
    console.log("==============================");
    console.log("");
    console.log("Employee Name : " + emp.name);
    console.log("Employee ID   : " + emp.id);
    console.log("Department    : " + emp.dept);
    console.log("Experience    : " + emp.exp + " Year");
    console.log("Salary        : ₹" + emp.sal);
    console.log("Bonus         : ₹" + bonus);
    console.log("Final Salary  : ₹" + finalSalary);
    console.log("Skills        : " + skills.join(", "));
    console.log("Attendance    : " + att + "%");
    console.log("Exam Status   : " + examStatus);
    console.log("Login Status  : " + loginStatus);
    console.log("Company       : " + company.name);
    console.log("Location      : " + company.location);
    console.log("==============================");

} else {
    alert("Thank You");
}
 

//------------------------------------------------------------------------------------------------//
//Bonus Task
// Flight Ticket Booking System

console.log("Welcome to SkyFly Airlines ");

// Flight data
const flights = [
  {
    flightNo: "AI101",
    from: "Bangalore",
    to: "Delhi",
    price: 5000
  },
  {
    flightNo: "AI202",
    from: "Bangalore",
    to: "Mumbai",
    price: 4000
  },
  {
    flightNo: "AI303",
    from: "Bangalore",
    to: "Chennai",
    price: 3000
  }
];

// Display available flights
alert(`
Available Flights:

1. AI101 | Bangalore → Delhi | ₹5000
2. AI202 | Bangalore → Mumbai | ₹4000
3. AI303 | Bangalore → Chennai | ₹3000
`);

// User details
let passengerName = prompt("Enter Passenger Name:");

let passengerAge = Number(prompt("Enter Age:"));

let selectedFlight = Number(
  prompt("Choose Flight (1, 2, or 3):")
);

// Flight selection using array index
let flight = flights[selectedFlight - 1];

// Ticket class
let ticketClass = prompt(
  "Choose Class: Economy or Business"
);

// Business class extra charge
let classCharge =
  ticketClass === "Business" ? 2000 : 0;

// Age-based discount
let discount =
  passengerAge < 12
    ? flight.price * 0.5
    : passengerAge >= 60
    ? flight.price * 0.2
    : 0;

// Final price calculation
let totalPrice =
  flight.price + classCharge - discount;

// Booking confirmation
let confirmBooking = confirm(
  `Passenger: ${passengerName}
Flight: ${flight.flightNo}
Route: ${flight.from} → ${flight.to}
Class: ${ticketClass}
Total Fare: ₹${totalPrice}

Confirm Booking?`
);

// Booking status
let bookingStatus =
  confirmBooking ? "Confirmed ✅" : "Cancelled ❌";

// Ticket object
const ticket = {
  passengerName,
  passengerAge,
  flightNo: flight.flightNo,
  route: `${flight.from} → ${flight.to}`,
  class: ticketClass,
  totalPrice,
  status: bookingStatus
};

// Output
console.log("----- TICKET DETAILS -----");
console.log(ticket);

alert(`
 Flight Booking Status

Passenger: ${ticket.passengerName}
Flight: ${ticket.flightNo}
Route: ${ticket.route}
Class: ${ticket.class}
Fare: ₹${ticket.totalPrice}

Status: ${ticket.status}
`);