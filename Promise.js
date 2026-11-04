//Promise is an object that represents  the eventually completion or failure of an asynchronous operations and its resulting value.
// Asynchronous Operation:-Its a task that takes some time to complete. It allows the rest of the prgm to continue executing without the task to finish
//Promise constuctor is used here.
//Three fun of promise
//then()--Executes when promise is fulfilled(used for handling success) 
//catch()--executes when the promise is rejected
//finaly()--The code will be executed even if the promise is fulfilled or rejected.(If there is a mandatory execution use this)
 const promise=new Promise((resolve,reject)=>{
    let success=true
    if(success)
    {
        resolve("Login Successfully")

    }
    else
    {
        reject("Reject")
    }
 })
 promise
 .then(result=>console.log(result))
 .catch(error=>console.log(error))
 .finally(()=>console.log("Finished"))

 //Async fun:-It is a function that always returns a promise.
 //Await:-Await is a keyword, it wait until its done before moving on.(If use async and await then we weill get a gurantee result )
 //await can be used only in async function.
 //function greet(){}
 //async function greet(){} async func returns promise not a normal func..
 // Async func goes to next task without completing one , for avoiding that await is used.