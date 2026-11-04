// try- code that may be throw an error, syntax:-try{}
//catch-the code that is used to handle the error, syntax:-catch(){}
//finally-The code will be executed even if no error, syntax:- finally{}
// we cannot use try alone, use try-catch, try-catch-finally, try-finally.
try
{
    console.log(result)
}
catch(error)
{
    console.log(error.message)

}
finally
{
    console.log("execution completed")
}