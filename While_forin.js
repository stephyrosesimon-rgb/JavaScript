 //Print even numbers from 1 to 20.
 //find the sum of numbers from 1 to 10
 //find the factorial of a number using while loop
 //Print numbers from 1o to 1
 //Find the sum of odd numbers from 1 to 50
 //For in
 //Print the values of an object
 //Print both keys and values of an object
 //Calculate the total mark of a student
 //Count the properties in an object

 
  //Print even numbers from 1 to 20.
  let i=1
 while(i<=20)
 {
    if(i%2===0)
    {
    console.log(i)
    }
    i++
 }
 //find the sum of numbers from 1 to 10

 let j=1;
 let sum=0
 while(j<=10)
 {
    sum=sum+j
    j++
 }
 console.log(sum)

 //find the factorial of a number using while loop
let k=5,m=1
while(k>0)
{
    m=m*k
    k--
}
console.log(m)

//Print numbers from 1o to 1
let n=10
while(n>0)
{
    console.log(n--)
}

 //Find the sum of odd numbers from 1 to 50
 let a=1,sum1=0
 while(a<=50)
 {
    if(a%2===1)
    {
        sum1=sum1+a

    }
    a++
 }
 console.log(sum1)

//Print the values of an object
let student=
{
    name:"Stephy",
    sub:"Maths",
    mark:87

}
for(let key in student)
{
    console.log(key)
    console.log(student[key])
}
 //Print both keys and values of an object
 let park=
 {
    name:"Lal bagh",
    location:"Banglore"
 }
 for(let key in park)
 {
    console.log(key)
    console.log(park[key])
 }
 //Calculate the total mark of a student
 let student1={
    maths:80,
    english:85,
    science:90,
    computer:96
 }
 let total=0
 for(let key in student1)
 {
    total=total+student1[key]
 }
 console.log(total)
  //Count the properties in an object
  let properties={
    prop1:1,
    prop2:2,
    prop3:3,
    prop4:4,
    prop5:5
  }
  let count=0
  for(let key in properties)
  {
    count++
  }
  console.log(count)
  //Break and continue
  //They are control statements used inside the loops
  for(let v=1;v<=5;v++)
  {
    if(v===3)
    {
        continue
    }
    console.log(v)
  }