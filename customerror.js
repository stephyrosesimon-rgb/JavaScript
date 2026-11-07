//throw new  Error("error occurs") ---throw is a key word and new is a keyword. If we want to raise an exception then we can use throw key word.
//Error is a class.
/* throw — Stops normal execution and throws an exception.
new — Creates a new object.
Error — A built-in JavaScript class for representing errors.
"error occurs" — The custom error message.
If we are customising the error then it is called as custom error.
Every exception has a predefined class.*/

class UsernameNotFoundError extends Error {
    constructor(message) 
    {
        super(message)// Used to refer parent class object
    }
}
function login(username)
{
    if(username!== "admin")
    {
        throw new UsernameNotFoundError("Invalid user login ")
    }
    else
    {
        console.log("Login successfully")
    }

}
login("hfdkd")