// Task2
let surname = "Hrynko"; 

console.log (surname);

// Task3

let x = 6;
let y = 51;

document.write(x);
document.write(" ,");
document.write(y);
document.write(" ,");

x = y;

document.write(x);
document.write(" ,");
document.write(y);

// Task4

let info = {
    brand: "McLaren",
    power: 720,
    DSC: true,
    price: undefined,
    color: null,
};

console.log(info);

// Task5

let isAdult = confirm("Are you 18?");
console.log(isAdult);

// Task6

let myName = "Hordiy";
let mySurname = "Hrynko";
let studyGroup = 602;
let yearOfBirth = 1992;
let married = true;

console.log(typeof studyGroup);
console.log(typeof yearOfBirth);
console.log(typeof married);
console.log(typeof myName);
console.log(typeof mySurname);

let varN = null;
let varUndef = undefined;

console.log(typeof varN);
console.log(typeof varUndef);

// Task7

let inf1 = prompt("Log in" ,"");
let inf2 = prompt("Enter your email, please" ,"");
let inf3 = prompt("Enter your password, please" ,"");

alert(`Dear ${inf1}, your email is ${inf2}, your password is ${inf3}!`);

// Task8

let secondsHour = 60*60; 
alert(`There are ${secondsHour} seconds per hour`);

let secondsDay = 60*60*24;
alert(`There are ${secondsDay} seconds in the day`);

let secondsMonth = 60*60*24*31;
alert(`There are ${secondsMonth} seconds in a month`);


