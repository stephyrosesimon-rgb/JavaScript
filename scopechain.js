//If a variable is not found in the current scope java script looks in the outerscope then the next outer scope and so on until it reaches the global scope.This is scopechain
let name="Stephy"
function outer()
{
    let age=29
    function inner()
    {
        let city="kannur"
        console.log(city)
        console.log(age)
        console.log(name)
    }
    inner()
}
outer()
