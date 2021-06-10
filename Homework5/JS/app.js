// Task 1

let mentor = {
    course: "JS Fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount (currentObject) {
    let count = Object.keys(currentObject).length;
    return count;
    }

console.log(propsCount(mentor));




// Task 2

let obj1 = {
    name: "Greg",
    surname: "Johnson",
    age: 45,
    position: "dev",
    experience: 18
}

function showProps(obj) {
    let a = [];
    let b = [];
    for(let key in obj) {
        a.push(key);
        b.push(obj[key]);
        console.log(a, b);
    }
}
showProps(obj1);




// Task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        alert(this.name + " " + this.surname);
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        this.middleNameW = middleName;
        alert(this.name + " " + this.surname + " " + this.middleNameW);
    }
    showCourse() {
        let currenDate = new Date();
        let currentYear = currenDate.getFullYear();
        let currentCourse = currentYear - this.year;
            if(currentCourse > 6){
                console.log("You have already graduated");
            }else{
                console.log("Current course: " + currentCourse);    
            }
    }
}
let student = new Student("Adam", "Sendler", 2017);
student.showCourse();




// Task 4

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(this.fullName + " salary " + salary);
    }
    #experience = 1.2;

    set setExp(value) {
        this.#experience = value;
    }
    get setExp() {
        return this.#experience;
    }
    showSalaryWithExperience() {
        let exp = this.dayRate * this.workingDays * this.#experience;
        console.log("Salary with exp: " + exp);
    }
    sortSalary(arrayWorkers) {
        let sortedSalary = arrayWorkers.sort(function (a, b) {
            return a.showSalaryWithExperience() - b.showSalaryWithExperience();
        })
        console.log(sortedSalary);
        for (let i = 0; i < sortedSalary.length; i++) {
            console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWithExperience());
        } 
    }
}

let worker1 = new Worker("Peter Craig", 350, 19);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience " + worker1.setExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience " + worker1.setExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Alfred Dushon", 300, 21);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience " + worker2.setExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience " + worker2.setExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Lisa Cudrow", 380, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience " + worker3.setExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience " + worker3.setExp);
worker3.showSalaryWithExperience();


let arrayWorkers = [worker1, worker2, worker3];
worker3.sortSalary(arrayWorkers);




// Task 5

class GeometricFigure {
    getArea () {
        return 0;
    }
    toString () {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor (b, a) {
        super ();
        this.b = b;
        this.a = a;
    }
    getArea () {
        return this.b * this.a / 2;
    }
}

class Square extends GeometricFigure {
    constructor (a) {
        super ();
        this.side = a;
    }
    getArea () {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor (r) {
        super ();
        this.radius = r;
    }
    getArea () {
        return Math.PI * this.radius ** 2;
    }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handlerFigure (figures) {
    return figures.reduce(function (accum, currentfig) {
        if(currentfig instanceof GeometricFigure) {
            console.log(`Geometric figure: ${currentfig.toString()} - area: ${currentfig.getArea()}`);
            return accum + currentfig.getArea();
        }
        // throw Error("Еhe figure does not match the class");
    },0)
}


console.log(handlerFigure(figures));















// function fibonachi (count) {
//     let fib = [];
//     for (let i = 0; i < count; i++) {
//         if( i == 0 ){
//             fib[i] = 1;
//         }else if( i == 1 ){
//             fib[i] = 2;
//         }else{
//             fib[i] = fib[i-2] + fib[i-1];
//         }
//     }
//     return fib;
// }

// let a = fibonachi(18);
// console.log(a);
