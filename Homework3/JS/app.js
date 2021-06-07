// Task 1

const arr = [2, 3, 4, 5];
let factor = 1;
for(let i = 0; i < arr.length; i++) {
    factor = factor * arr[i];
    console.log(factor);
}

let factor1 = 1;
let i = 0;
while( i < arr.length) {
    factor1 = factor1 * arr[i];
    i++;
    console.log(factor1);
}



// Task 2

for (let i = 0; i <= 15; i++) {
    if ( i % 2  == 0) {
    console.log([i] + "is even");
    }else if ( i % 2 != 0) {
        console.log([i] + "is odd");
    }
}



// Task 3

function randArray (k) {
    // let res = Math.floor(Math.random() * 500);
    let arr = [];
    for ( i = 0; i < k; i ++){
        let res = Math.floor(Math.random() * 500);
        if (i < k){
            arr.push(res);
        }
    }
    return arr;  
}
console.log(randArray(7));



// Task 4

function raiseToDegree (a, b) {
    a = prompt("Enter the number");
    b = prompt("Enter the degree");
    let res = Math.floor(Math.pow(a, b));
    console.log(res);
    return res;
}
raiseToDegree();


// Task 5

function findMin() {
    let min = 1000000;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
 }

console.log(findMin(123979,45846,568683,679876,-768));
 


// Task 6

let findUnique = function (arr) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return true;
        }
    }
    return false;
}
let a = findUnique([2,3,4,7,7]);
console.log(a);



// Task 7

function lastElem(array, count) {
    if (count == undefined){
        console.log(array.slice(-1));
    }else{
        return array.slice(-count);
        }
}

console.log(lastElem([2,3,4,5,6,7,8], 3));



// Task 8

function convertFirstLetter (string) {
    const array = string.split( " " );
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newArray.join( " " );
}
console.log(convertFirstLetter("i love java script"));

