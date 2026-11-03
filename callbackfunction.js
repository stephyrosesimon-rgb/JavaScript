//a callback function is a function that is pass as an argument to another function and is executed later.Usually after some task is completed.
function greet()
{
    console.log("Hello")
}
function user(callback)
{
    console.log("Hi")
    callback()
}
 user(greet)
 
//Call back hell: It happens when we use multiple call back inside one another
//Its makes the code difficult to read and maintain.It is also called as pyramid of doom

//Adavantages of call back
//reusability of code
//Flexibile
//Better oragnisation


//Write a prgm to add two numbers and display the result using a callback function
//write a prgm to find the square of an number and display the result using a callback function
//Write a prgm to check whether a no is even or odd and display the result using a callback function
//Write a prgm to find the largest of two numbers  and display the result using a callback function.

//Write a prgm to add two numbers and display the result using a callback function
function add(a,b,callback)
{
 let result= a+b
 callback(result)
}
function display(sum)
{
  console.log("The sum is ",sum)
}
add(2,3,display)

//write a prgm to find the square of an number and display the result using a callback function
 function square(a,callback)
 {
    let result= a*a
    callback(result)
 }
 function display1(sum1)
 {
   console.log("The square of the no is "+sum1)
 }
 square(5,display1)

 //Write a prgm to check whether a no is even or odd and display the result using a callback function
 function odd_even(d,callback)
 {
    if(d%2===0)
    {
        callback("Even no")
    }
    else
    {
        callback("Odd no")
    }
 }
 function display2(value)
 {
    console.log(value)
 }
 odd_even(3,display2)

 //Write a prgm to find the largest of two numbers  and display the result using a callback function.

 function largest(a,b,callback)
 {
    if(a>b)
    {
        callback(a)
    }
    else
    {
        callback(b)
    }
 }
function display3(value1)
{
    console.log(value1+ " is greater")
}
largest(58,7,display3)
 


 