function sayHi(): void {
  console.log("Hi");
}
sayHi()
// If there is no return type then type void

function add(a:number,b:number):number
{
    return a+b
}
console.log(add(4,5))

//anonymous fun: A function without a name.
let multiply= function(x:number,y:number):number
{
 return x*y
}
console.log(multiply(3,4))