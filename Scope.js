/*Two types:-Global scope and local scope
The variables declared outside the function is called global scope.
*/
let a=50
let b=20
function sum()
{
    console.log(a+b)
}
sum()
function sub()
{
    console.log(a-b)
}
sub()
//local scope
// The variables declared inside the function is called local scope
//output will be error
function add()
{
    let d=10
    let e=4             
    console.log(d+e)
}
add()
function diff()
{
    console.log(d-e)
}
diff()
