//For loop
for(let i=1;i<=5;i++)
{
   // console.log(i)
}
//while loop
/*Initialization
//while(condition)
{
increment/decrement
}
*/
/*j=1
while(j<=5)
{
   // console.log(j)
   // j++
}*/
//for-of
/*for-of is used to iterate on collection of objects like string, array, map and set.
for(let variable of iterable)
{}
//for-in
for-in is used to operate over the keys of an object
for(let key in object)
{}
*/
let employee=
{
    name:"Stephy",
    age:"29",
    role:"Engineer"
}
for(let key in employee)
{
    console.log(key)
    console.log(employee[key])
}

//print even no from 1 to 20 using for loop.
for(let i=1;i<=20;i++)
{
    if(i%2===0)
    {
        console.log(i)
    }
}
for(i=1;i<=20;i++)
{   
    if(i%2===1)
    {
        console.log(i)
    }
}

//find the sum of numbers from 1 to 10
let sum=0
for(let k=1;k<=10;k++)
{
    sum=sum+k
}
console.log(sum)
//print numbers from 10 to 1
 for(let m=10;m>0;m--)
 {
    console.log(m)
 }
 //find the factorial of 5
 let product =1
 for(let n=5;n>0;n--)
 {
    product=product*n
 }
 console.log(product)
 //count how many numbers between 1 and 100 are divisible by 5

 let count =0
 for(let a=1;a<=100;a++)
 {
    if(a%5===0)
    {
        count++;
    }
 }
 console.log(count)
 //count the numbers divisible by both 3 and 5 between 1 and 100
 let c=0
 for(let b=1;b<=100;b++)
 {
    if(b%3===0&&b%5==0)
    {
        c++
    }
 }
 console.log(c)
 //print numbers from 1 to 20 and stop when the number reaches 15.
 for(let d=1;d<=20;d++)
 {
    console.log(d)
    if(d===15)
    {
        break
    }
 }
 //print the square of numbers from 1 to 10

 for(let e=1;e<=10;e++)
 {
    console.log(e*e)
 }