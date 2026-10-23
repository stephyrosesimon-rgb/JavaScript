/* => ----- used to denote arrow function
syntax:----const functionname=()=>
{
}
In js we use arrow function to write function in a shorter way.
mostly used in playwright
*/
const sample_message=()=>
{
    console.log("Hello")
}
sample_message()

//parametrized arrow function
const multiplication=(a,b)=>
{
    console.log(a*b)
}
multiplication(2,3)

//paramatrized arrow function with return type
const addition=(a,b)=>
{
    return a+b
}
console.log(addition(5,8))

//default parameter
//In js default parameter allow you to assign a default value
//to a function if no value is passed.
function guest(name="default_value")
{
    console.log(name)
    
}
guest("Rose")
guest()