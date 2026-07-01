// Task 1

let emp = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

let hs = emp[0];

for (let e of emp) {
  if (e.salary > hs.salary) {
    hs = e;
  }
}

console.log("Highest Salary :", hs.salary);
console.log("Employee Name :", hs.name);

// Task 2

let staffB = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

let key = 103;


for (let item of staffB) {
  if (item.id === key) {
    console.log("Employee Found");
    console.log("Name :", item.name);
    console.log("Salary :", item.salary);

  }else{
    console.log("Employee Not Found");
  }
}


// Task 3

let listC = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

let add = 5000;

for (let data of listC) {
  console.log(`${data.name} : ${data.salary + add}`);
}

// Task 4

let teamD = [
  { name: "vyshu", experience: 2 },
  { name: "chetana", experience: 7 },
  { name: "trisha", experience: 5 }
];

for (let mem of teamD) {
  console.log(`${mem.name} - ${mem.experience >= 5 ? "Senior Employee" : "Junior Employee"}`);
}
// Task 5

let groupE = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

for (let obj of groupE) {
  console.log(obj.name);
}

// Task 6

let crewF = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

for (let ele of crewF) {
  console.log(ele.id);
}

// Task 7

let batchG = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

let sumSal = 0;

for (let ele of batchG) {
  sumSal += ele.salary;
}

console.log("Total Salary :", sumSal);


// Task 8

let officeH = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

for (let ele of officeH) {
  if (ele.salary > 40000) {
    console.log(ele.name);
  }
}

// Task 9

let workI = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

let inc = 5000;

for (let ele of workI) {
  ele.salary += inc;
  console.log(`${ele.name} : ${ele.salary}`);
}

// Task 10

let dataJ = [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

for (let ele of dataJ) {
  console.log(`Employee Name : ${ele.name}
Employee ID : ${ele.id}
Salary : ${ele.salary}
`);
}

// Challenge Task
console.log("-----------------------challange task-----------------------")
let office= [
  { name: "vyshu", id: 101, salary: 30000 },
  { name: "chetana", id: 102, salary: 60000 },
  { name: "trisha", id: 103, salary: 45000 }
];

let totalEmp = office.length;
let maxEmp = office[0];
let minEmp = office[0];
let totalPay = 0;
let searchKey = 103;
let isExist = false;
let bonusAmt = 5000;

console.log("Total Employees :", totalEmp);

for (let record of office) {
  totalPay += record.salary;

  if (record.salary > maxEmp.salary) {
    maxEmp = record;
  }

  if (record.salary < minEmp.salary) {
    minEmp = record;
  }

  if (record.salary > 40000) {
    console.log("Above 40000 :", record.name);
  }

  if (record.id === searchKey) {
    console.log("Employee Found");
    console.log("Name :", record.name);
    console.log("Salary :", record.salary);
    isExist = true;
  }
}

if (!isExist) {
  console.log("Employee Not Found");
}

console.log("Highest Salary :", maxEmp.salary);
console.log("Highest Salary Employee :", maxEmp.name);

console.log("Lowest Salary :", minEmp.salary);
console.log("Lowest Salary Employee :", minEmp.name);

console.log("Total Salary :", totalPay);

console.log("Salary After Bonus");

for (let bonusRec of office) {
  console.log(`${bonusRec.name} : ${bonusRec.salary + bonusAmt}`);
}

console.log("Employee Report");

for (let reportRec of office) {
  console.log(`Employee Name : ${reportRec.name}
Employee ID : ${reportRec.id}
Salary : ${reportRec.salary}
`);
}