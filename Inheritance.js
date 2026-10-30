class Animal//Parent class
{
    eat()
    {
        console.log("Animal is eating")
    }
}
class Dog extends Animal//Child class
{
    bark()
    {
        console.log("Dog is barking")
    }
}
const obj=new Dog()
obj.eat()
obj.bark()

//Create a parent class employee with a display employee function and then create a child class display manager function.

class Employee
{
    display_employee()
    {
        console.log("Hi im employee")
    }
}
class Manager extends Employee
{
    display_manager()
    {
        console.log("Hi Im manager")
    }
}
const obj1= new Manager()
obj1.display_employee()
obj1.display_manager()