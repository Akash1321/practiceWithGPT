const members =
[
  {
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
  },
  {
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
  },
  {
    id: 66,
    name: "Emmet Foster",
    workExp: 22,
    deptExp: 9,
    isPermanent: true,
  },
  {
    id: 89,
    name: "Brent Dolan",
    workExp: 16,
    deptExp: 12,
    isPermanent: true,
  },
];

// 1. Find the sum of all members workExp sum who are permanent (isPermenant)?

// const sumOfExpericeOfPermanent = arr => arr.filter(detail => detail.isPermanent)
// .reduce((sum, detail) => sum + detail.workExp, 0);

const sumOfExpericeOfPermanent = arr => arr.reduce((sum, detail) => detail.isPermanent ? sum + detail.workExp : sum, 0);

// console.log(sumOfExpericeOfPermanent(members));


// 2. Find the total score of employees who are permanent? score = workExp + deptExp

const scoreOfPermanentEmployee = arr => arr.reduce((score, detail) => detail.isPermanent ? score + detail.workExp + detail.deptExp : score, 0);

// console.log(scoreOfPermanentEmployee(members));



let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    },
    {
        "id": 3014,
        "name":"Abhi",
        "salary":48000
    }];

    
    // 1. Find the total salary of employees?

    const totalSalary = arr => arr.reduce((total, detail) => total + detail?.salary, 0);

    // console.log(totalSalary(employees));

    //2. Find all the employee who earn more than the average salary?

    const averageSalary = arr => arr.reduce((total, detail) => total + detail?.salary, 0)/arr.length;

    const moreThanAverage = arr => arr.filter(detail => detail.salary > averageSalary(employees));

    // console.log(moreThanAverage(employees));



    const input = "Every developer likes to mix kubernetes and javascript";

// 1. write a function which removes all letters between first and last letter of a word and replace with number of letters

//expected output "E3y d7r l3s to m1x k8s a1d j8t"







  