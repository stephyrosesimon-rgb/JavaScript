//2 js module--common js module and ES module
//It is used to import and export codes between the files.
//These are node js module system.
//Common js is an older module system. Modern module system is ES.

//import and export using common js module
//create a file math.js
/*function add()
{
    return a+b
}
module.exports=add()*/
//create a file app.js
/*const add= require('./math.js')
console.log(add(10,4))*/

//import and export using ES module
//create a file math.js
/*export function add()
{
    return a+b
}
create a file app.js
import{add} from './math.js'
console.log(add(5,6))
*/

//Node js :Its the run time environment of JS,This helps in code execution
//npn---node package manager,npn helps to manage packages and libraries


//dev depentencies---They are packages needed only during development and testing not when the appliaction is running the production
// It can be installed in two different ways
//npm install --save-dev package-name
//npm install -D package-name



//@playwright/test
//npm install -D '@playwright/test'
//allure-playwright

//File Handling
//File system Module---FS module is a built in node js moduleit helps to interact with the files and folders on your computer.
//fs can be used with common js and Es module.
//const fs=require('fs')----This is the way to use FS with common js module.

//import * as fs from 'node:fs---Tnis is the way to use FS with ES module.