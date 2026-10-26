/*Array is used to store multiple values of sametype
Array literal format--Most commonly used format to create array
*/
let course=["javascript","playwright","python"]
console.log(course)
//Empty array format
let numbers=[]
numbers[0]=1
//numbers[1]=2
numbers[2]=3
numbers[3]=4
console.log(numbers)
//By using array constructor
let colors=new Array("Red","Yellow","Black")
//let colors=new Array()
console.log(colors)
//creating array with a specific size
let myarray=new Array(5)
myarray[0]=1
myarray[1]=4
myarray[2]=5
myarray[3]=2
myarray[4]=8
console.log(myarray)
//array creation using array of function
//syntax:-Array.of()
let num=Array.of(2,4,5,7)
console.log(num)
//length is a property used to find the size of array
console.log(num.length)
//Iteration in array-Iterating using for loop
let fruits=["Mango","Apple","Grapes"]
for(i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}
//Array creation using for-of 
let fruits1=["Mango1","Apple1","Grapes1"]
for(let fruit of fruits1)
{
    console.log(fruit)
}
//forEach-its a array method/array function
//call back function- Inside the function passing as arguments
let fruits2=["Mango2","Apple2","Grapes2"]
fruits2.forEach(function(fruit)
{
    console.log(fruit)
})
//Iteration using for-in
//for-in is used to iterate the array and to get the array index.
let fruits3=["Mango3","Apple3","Grapes3"]
for(let index in fruits3)
{
    console.log(index,fruits3[index])
}

let numbers1=[3,5,9,6]
for(let index in numbers1)
{
    console.log(index, numbers1[index])
}
let numbers2=[3,5,9,6]
console.log(numbers2[3])
