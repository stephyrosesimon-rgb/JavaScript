/*Typescript is a programming language developed by microsoft that is builds on javascrpt.
* It performs type checking and compiles into plane java script.
* More importance to type checking here. 
* the file which is created in ts will get converted to js after compilation and the js file is executed.*/

let age:number=23//need to provide the type only at the time of declaration
//age="Stephy"//Reassignation is possible but it should be same type. redecalation is not possible.
age=67
console.log(age)
//compilation cmd---tsc basicstypescripts.ts--then a js file will get created.
//don't update the created js file. update in ts file and after compilation it will be reflected in js file.
//types---number,string,boolean
for (let i: number = 1; i <= 5; i += 1) {
    console.log(i);
}