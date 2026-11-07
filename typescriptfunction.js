"use strict";
function sayHi() {
    console.log("Hi");
}
sayHi();
// If there is no return type then type void
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
//anonymous fun: A function without a name.
let multiply = function (x, y) {
    return x * y;
};
console.log(multiply(3, 4));
