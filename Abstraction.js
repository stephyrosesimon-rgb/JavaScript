class ATM
{
    withdraw(amount)
    {
        console.log(amount)
        this.#validate_Amount(amount)
    }
    #validate_Amount(amount)
    {
        console.log("validating amount")
    }
}
const obj=new ATM()
obj.withdraw(1000)
//Constrctor:-Its special method in Js.COnstructor will be automaticaly invoked at the time of object creation
//const obj=new ATM() here new ATM()--- this will invoke the constructor----the class name after new is actually constructor invoking.
//Class name and constructor name should be same.