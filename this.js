//this keyword refers to the object that is currently executing the function. Its value depends on the function is called.
const person={
    name:"Stephy",
    greet()
    {
        console.log(this.name)
    }
}
person.greet()