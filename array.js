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

//Array Function
//Map Function:- Creating new array based on existing array by transforming the values.
let num1=[1,2,3]
let double=num1.map(num=>num*2)
console.log(double)

//Filter Function:-This will create a new array based on the provided condition.It will return the result as array.
//If condition is not satisfied it is going to return an empty array
let unfilteredarray=[10,20,30,40,50]
let filteredarray=unfilteredarray.filter(num=>num>15)
let filteredarray1=unfilteredarray.filter(num=>num>60)
console.log(filteredarray)
console.log(filteredarray1)

//Find function:-In find function it will return a single element from the array based on the provided condition.
//If the conditions are not satisfied then it will return undefined
let unfindarray=[10,20,30,40,50]
let findarray=unfindarray.find(num=>num>60)
console.log(findarray)

//push function:- To insert values towards the ending of an array
let pusharray=[]
pusharray.push(2)
pusharray.push(7)
pusharray.push(6)
pusharray.push(5)
console.log(pusharray)
pusharray.push(1,3,8)
console.log(pusharray)

//pop function: To remove a value towards the ending of an array
let languages=["Hindi","English","Malayalam"]
languages.pop()
console.log(languages)

//unshift:-Used to add values in the begining of an array
languages.unshift("French")
console.log(languages)

//shift function:used to remove values in the begining of an array
languages.shift()
languages.shift()
console.log(languages)

//splice function :-It is used to add,remove or replace elements in an array
//syntax:-arrayname.splice(index position, deletion count, new element to be added(only for adding and replace))
let vehicle=["car","Bus","Bike","Auto"]
vehicle.splice(2,0,"bicycle")
console.log(vehicle)
let animals=["dog","cat","cow","goat"]
animals.splice(1,2)
console.log(animals)
let country=["India","Canada","Chaina"]
country.splice(1,1,"Pakistan")
console.log(country)
country.splice(0,2,"UK","Japan")
console.log(country)

//includes:Used to validate a particular value in an array
let languages1=["Hindi","English","Malayalam"]
console.log(languages1.includes("English"))
console.log(languages1.includes("French"))

//indexof:- used to get the index position of element in an array
console.log(languages1.indexOf("Malayalam"))// If the value is not found it will return -1.
console.log(languages1.indexOf("malayalam"))

//reverse:-used to reverse an array
console.log(languages1.reverse())


