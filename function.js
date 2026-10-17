//function--A function is a block of code designed to perform a specific task.
//function functionname(){}
/* start function name with small letter and don't leave space b/w the words in fun name.
Normal function and Arrow function
Three types of  Normal fun:
non-parametrized
parametrized
function with return type.*/
//non-parametrized
function sample()
{
    console.log("Hello")
}
//To call non-paramaterize fun--- functionname()
sample()
/*Parametrized function
function functionname(parametername)
{
}
functionname(parameter value)*/
function sum(a,b)
{
    console.log(a+b)
}
sum(5,6)
 function samplemessage(yourmessage,anothermessage)
 {
    console.log(yourmessage,anothermessage)
 }
 samplemessage("Hi","How are you")

 function sample1(value)
 {
    console.log(value)
 }
 sample1(false)
 //function with returntype
 /*function functionname(parameter name)
{
return 
}
let variablename=functionname(parameter value)
console.log(variablename)
*/

function add(a,b)
{
    return a+b
}
//let sum1=add(10,20)
//console.log(sum1)
console.log(add(10,12))
//Create a parametrized fun to check whether a no is even or odd
function evenodd(num)
{
    if(num%2===0)
    {
        console.log("even")
    }
    else
    {
        console.log("odd")
    }
}
evenodd(4)
//write parametrized fun with return type to find the largest of two numbers
function largest(a,b)
{
   /* if(a>b)
    {
        return a
    }
    else
    {
        return b
    }*/ 
    return a>b?a:b
}
console.log("The largest no is "+largest(1,2))