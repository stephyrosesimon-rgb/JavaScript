/*1. Write a program to check whether a number is divisible by 5 using if else
2. Write a program to find the largest of two numbers using if else
3. Accept a character and use switch to identify whether it is a vowel using switch
4. Accept a signal color (red, yellow, or green) and display the appropriate instruction using switch
5. Display a menu to calculate the area of a circle, rectangle, or square using switch
6. Print the cubes of numbers from 1 to 10 using for loop
7. Print all numbers divisible by 5 between 1 and 100 using for loop
8. Count how many numbers between 1 and 50 are divisible by 3 using for loop
9. Count from 1 to 20 and print only odd numbers using while loop
10. Find the factorial of a given number using while loop
11. Create a car object with brand, model, and year. Display each property and its value use for in loop
12. Create an employee object with ID, name, salary, and department. Print all its details use for in loop
13. Count the number of properties in an object use for in loop
14. Write a function that accepts two numbers and prints their difference.
15. Write a function that accepts a number and prints its factorial.
16. Write a function that accepts a number and checks whether it is even or odd.
17. Write a function that returns the cube of a number.
18. Write a function that returns the largest of two numbers.
19. Write a function that returns the largest of three numbers.
20. Write a function that returns true if a number is even and false otherwise.
21. Write a function that returns the factorial of a number.
22. Write a function that returns the reverse of a number.*/


//1. Write a program to check whether a number is divisible by 5 using if else
let num=1
if(num%5===0)
{
    console.log("divisible by 5")
}
else
{
    console.log("Not divisible by 5")
}

//2. Write a program to find the largest of two numbers using if else
let a=1,b=8
if(a>b)
{
    console.log("The largest no is "+ a)
}
else
{
    console.log("The largest no is "+ b)
}

//3. Accept a character and use switch to identify whether it is a vowel using switch
let c="U"
switch(c)
{
    case "a":
        console.log("Its a vowel")
        break
    case "A":
        console.log("Its a vowel")
        break
    case "e":
        console.log("Its a vowel")
        break
    case "E":
        console.log("Its a vowel")
        break
    case "I":
         console.log("Its a vowel")
         break
    case "i":
         console.log("Its a vowel")
         break
    case "O":
          console.log("Its a vowel")
          break
    case "o":
         console.log("Its a vowel")
         break
    case "U":
         console.log("Its a vowel")
         break
    case "u":
         console.log("Its a vowel")
         break
    default:
         console.log("Its not a vowel")
}
//4. Accept a signal color (red, yellow, or green) and display the appropriate instruction using switch

let color="GREEN"
switch(color)
{
    case "RED":
        console.log("STOP")
        break
    case "YELLOW":
        console.log("READY")
        break
    case "GREEN":
        console.log("GO")
        break
    default:
        console.log("Invalid color")
}
//5. Display a menu to calculate the area of a circle, rectangle, or square using switch
let shape="rectangle",radius=5,area=1,l=4,w=5
switch(shape)
{
    case "circle":
        area=3.14*radius*radius
        console.log("The area of circle is "+ area)
        break
    case "rectangle":
        area=l*w
        console.log("The area of rectangle is "+ area)
        break
    case "square":
        area=l*l
        console.log("The area of square is "+ area)
        break
    default:
        console.log("Invalid Input")
}

//6. Print the cubes of numbers from 1 to 10 using for loop
for(let i=1;i<=10;i++)
{
    console.log(i*i*i)
}

//7. Print all numbers divisible by 5 between 1 and 100 using for loop
for(let i=1;i<=100;i++)
{
    if(i%5===0)
    {
        console.log(i)
    }
}

//8. Count how many numbers between 1 and 50 are divisible by 3 using for loop
let count=0
for(let i=1;i<=50;i++)
{
    if(i%3===0)
    {
        count++
    }
}
console.log(count)

//9. Count from 1 to 20 and print only odd numbers using while loop
let j=1
while(j<=20)
{
    if(j%2===1)
    {
        console.log(j)
    }
    j++
}

//10. Find the factorial of a given number using while loop
let prod=1,i=4
while(i>0)
{
    prod=prod*i
    i--
}
console.log(prod)

//11. Create a car object with brand, model, and year. Display each property and its value use for in loop
 let car={
    brand:"Honda",
    model:"Civic",
    year:2022
 }
 for(let key in car)
 {
    console.log(key)
    console.log(car[key])
 }

//12. Create an employee object with ID, name, salary, and department. Print all its details use for in loop
let employee={
    Id:3548,
    Name:"Stephy",
    Salary:45000
}
for(let key in employee)
{
    console.log(key)
    console.log(employee[key])
}

//13. Count the number of properties in an object use for in loop
let student={
    name:"Stephy",
    subject:"Maths",
    marks:98
}
let count1=0
for(let key in student)
{
    count1++
}
console.log(count1)

//14. Write a function that accepts two numbers and prints their difference.

function difference(a,b)
{
    console.log("The difference between the no is "+ (a-b))

}
difference(23,10)

//15. Write a function that accepts a number and prints its factorial.
function factorial(a)
{
    let p=1
    for(let i=a;i>0;i--)
    {
        p=p*i
    }
    console.log("The factorial of no "+a,"is "+p)
}
factorial(5)

//16. Write a function that accepts a number and checks whether it is even or odd.

function odd_even(a)
{
    if(a%2===0)
    {
        console.log(a+" is an even no")

    }
    else
    {
        console.log(a+" is an odd no")
    }
    
}
odd_even(1)

//17. Write a function that returns the cube of a number.
function cube(a)
{
 return(a*a*a)
}
let value=cube(2)
console.log("The cube of the no is "+value)

//18. Write a function that returns the largest of two numbers.
function largest(a,b)
{
    return a>b?a:b
}
let f=largest(34,6)
console.log("The largest no is "+f)

//19. Write a function that returns the largest of three numbers.
function largest_three(a,b,c)
{
    if(a>b && a>c)
    {
        return a    
    }
    else if(b>a && b>c)
    {
        return b
    }
    else 
    {
        return c
    }
}
let o=largest_three(26,8,10)
console.log("The largest no is "+o)

//20. Write a function that returns true if a number is even and false otherwise.
function even(a)
{
    if(a%2===0)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(even(69))

//21. Write a function that returns the factorial of a number.

function factorial1(a)
{
    let p=1
    for(let j=a;j>0;j--)
    {
        p=p*j
    }
    return p
}
console.log("The factorial of the no is "+factorial1(5))
//22. Write a function that returns the reverse of a number.
function reverse(a)
{
    let sum=0
    for(let num=a;num;num=parseInt(num/10))
    { 
        let r=num%10
        sum=sum*10+r
    }
    return sum
}
let s=reverse(2356)
console.log(s)