

// Task 1

let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x);
console.log(res3);
console.log(typeof res3);

let res4 = String(x) * "Str" * Boolean(y);
console.log(res4);
console.log(typeof res4);



// Task 2

const verify = prompt("Enter the number:", 1);

if ( verify % 7 == 0 ){
    console.log("Число кратне 7");
}else{
    console.log("Це число не кратне 7");
}

if ( verify > 0 && verify % 2 == 0 ){
    console.log("Це число є парним додатнім");
}else{
    console.log("Це число не є парним чи додатнім");
}



// Task 3

const arrData = [];
arrData.unshift( 388 );
arrData.push( "Lviv" );
arrData.push( true );
arrData.push( null );
alert(arrData.length);

const enteringData = prompt("Enter anything, please", 0);
arrData.push( enteringData );
alert(arrData [4]);
arrData.shift();
alert(arrData);



// Task 4

let cities = ["Rome", "Lviv", "Warsaw"];
let str = cities.join("*");
alert(str);



// Task 5

const isAdult = prompt("Are you 18?", 18);

if( isAdult >= 18 ){
    alert("Ви досягли повнолітнього віку");
}else if( isAdult <= 10 ){
    alert("Ви ще надто молоді");
}



// Task 6

const enterSideTriangle1 = +prompt("Enter the first side of the triangle" , "");
    if ( enterSideTriangle1 > 0 ){
        true
    }else{
        alert("Incorrect data");
    }

const enterSideTriangle2 = +prompt("Enter the second side of the triangle" , "");
    if ( enterSideTriangle2 > 0 ){
        true
    }else{
        alert("Incorrect data");
    }    
const enterSideTriangle3 = +prompt("Enter the third side of the triangle" , "");
    if ( enterSideTriangle2 > 0 ){
        true
    }else{
        alert("Incorrect data");
    }
const halfPerimeter = (Number(enterSideTriangle1) + Number(enterSideTriangle2) + Number(enterSideTriangle3)) / 2;
const squareOfTriangle = (halfPerimeter * (halfPerimeter - enterSideTriangle1) * (halfPerimeter - enterSideTriangle2) * (halfPerimeter - enterSideTriangle3)) ** (1/2);
console.log( "Площа трикутника" + ":" + squareOfTriangle.toFixed(3));


if ( enterSideTriangle1 ** 2 == enterSideTriangle2 ** 2 + enterSideTriangle3 ** 2){
    console.log("Right Triangle");
}else if( enterSideTriangle2 ** 2 == enterSideTriangle3 ** 2 + enterSideTriangle1 ** 2){
    console.log("Right Triangle");
}else if( enterSideTriangle3 ** 2 == enterSideTriangle2 ** 2 + enterSideTriangle1 ** 2) {
    console.log("Right Triangle");
}else{
    console.log("Not Right Triangle");
}



// Task 7

const now = new Date();
const nowHour = now.getHours();

if (nowHour >= 23 && nowHour < 24 || nowHour > 0 && nowHour < 5) {
    alert("Доброї ночі");
}else if ( nowHour >= 5 && nowHour < 11){
    alert("Доброго ранку");
}else if ( nowHour > 11 && nowHour < 17){
    alert("Доброго дня");
}else{
    alert("Доброго вечора");
}

switch (Boolean(nowHour)) {
    case nowHour >= 23 && nowHour <= 24 || nowHour >= 0 && nowHour < 5:
        console.log("Доброї ночі");
        break;
    case nowHour >= 5 && nowHour < 11:
        console.log("Доброго ранку");
        break;
    case nowHour >= 11 && nowHour < 17:
        console.log("Доброго дня");
        break;
    default:
        console.log("Доброго вечора");        
}




