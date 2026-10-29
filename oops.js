//oops-Object oriented programming language.
//4 pillers of oops-Inheritance, Polymorphism,Encapsulation, Abstraction
//Inheritance:There will be 2 classess, parent and child.Here one class can acquire properties and methods of another class.Used for increasing the reusability of code.
//Polymorphism:Same method can perform different actions.
//Encapsulation:-wrapping data into a single unit.Used for protecting the data.
//Abstraction:-Hides the internal details and shows only the essential features to the user.
//Only inheritance is required in js
//What is class? Class is a blueprint or template used to create objects.
//Object:- Object is a collection of related data and functions.
//class Syntax:-class Classname{}.Always start class name with capital letter.No space between classname.No numbers and special character to start the classname.
//no need to use function keyword inside the class.
//const objectname=new Classname()
//objectname.functionnname()
class Sampleclass
{
sample(){
    console.log("Its a smaple function")
}
}
const obj=new Sampleclass()
obj.sample()
//Object-literal format
let student={
    name:"Stephy",
    age:"29",
    greet()
    {
        console.log("Hello")
    }

}
console.log(student.name,student.age)
student.greet()
console.log(student)
for(let key in student)
{
    console.log(key,student[key])
}
//By using new Object()--new is a keyword and Object() is a predefined constructor
const employee= new Object()
employee.name="Stephy"
employee.salary= 50000
employee.designation="Engineer"
console.log(employee)
//json object creation:- It is a text format used to store an exchange data. 
//It consist of key-value pair.Function is not allowed.
let students={
    "name":"Rose",
    "age":29,
    "Department":"marketing"
}
console.log(students)
console.log(students.name)