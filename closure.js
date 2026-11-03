//Closure is a function that remembers variables from its outer function after the outer function has finished execution 
function outer()
{
    let name="Stephy"
    function inner()
    {
        console.log(name)
    }
    return inner//entire function will return
}
const x=outer()//outer function will return the inner function and it got stored in variable
x()