"use strict";
//1.Write a prgm to check whether a number is positive or negative.
let a = -10;
if (a < 0) {
    console.log("Negative no");
}
else {
    console.log("Positive no");
}
//2.check a no is even or odd
let b = 1;
if (b % 2 === 0) {
    console.log("Even no");
}
else {
    console.log("Odd no");
}
//3. Display a season based on the month number using switch
let c = 4;
switch (c) {
    case 1:
        console.log("Winter");
        break;
    case 2:
        console.log("Winter");
        break;
    case 3:
        console.log("Winter");
        break;
    case 4:
        console.log("Spring");
        break;
    case 5:
        console.log("Spring");
        break;
    case 6:
        console.log("Summer");
        break;
    case 7:
        console.log("Summer");
        break;
    case 8:
        console.log("Summer");
        break;
    case 9:
        console.log("Autumn");
        break;
    case 10:
        console.log("Autumn");
        break;
    case 11:
        console.log("Autumn");
        break;
    case 12:
        console.log("Winter");
        break;
    default:
        console.log("Invalid input");
}
// 4. Print all prime numbers between 1 and 100 using for loop
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
//5.Print only properties whose numeric values greater than 50 using for in loop.
let data = {
    data1: 40,
    data2: 78,
    data3: 67,
};
for (let key in data) {
    if (data[key] >= 50) {
        console.log(key);
    }
}
//6.Create an object with five subject marks and calculate the total using for in loop.
let marks = {
    maths: 89,
    english: 96,
    science: 93,
    social: 97,
    hindi: 98
};
let sum = 0;
for (let key in marks) {
    sum = sum + marks[key];
}
console.log(sum);
//7.Create a fun that returns the factorial of a number
let prod = 1;
function factorial(a) {
    for (let i = 1; i <= a; i++) {
        prod = prod * i;
    }
    return prod;
}
console.log(factorial(4));
//8.Create a fun that accepts two numbers and a callback for multiplication.
function multiplyNumbers(a, b, callback) {
    callback(a, b);
}
function result(c, d) {
    console.log(c * d);
}
multiplyNumbers(4, 5, result);
//9. Create a fun that prints a message and then executes a callback.
function greeting(a, callback) {
    console.log(a);
    callback("This is callback");
}
function displaymessage(b) {
    console.log(b);
}
greeting("This is main fun", displaymessage);
//10.Create a non parametrized fun that prints numbers from 1 to 10.
function printingnumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printingnumbers();
