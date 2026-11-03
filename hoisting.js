//Hoisting is a behaviour of moving declaration at the top of their scope before code execution. It is applicable to both variables and function
//for hoisting first we call and then we declare
//var can be used for hoisting without any restrictions
console.log(a)
//var a
var a=10// value declaration is possible but value assignation is not possible for hoisting
console.log(a)

//const and let can be hoisted but will be in temporal dead zone (tdz)until their declaration is reached.
//console.log(b)
let b=20
console.log(b)

//console.log(c)
const c=2
console.log(c)

great()
function great()
{
    console.log("Hello")
}

