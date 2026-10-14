//ConditionalStatements---if-else, Switch,if
let age =15
if (age>=18)
{
    console.log("Eligible for voting")
}
else
{
    console.log("Not Eligible for voting")
}

// will get result only if the condition is true

let candidateage= 15
if(candidateage>=18)
{
    console.log("Adult")
}
else
{
    console.log("Minor")

}*/

//Check Whether a no is positive or negative?
//Check whether a no is even or odd?
//Check whether a student is passed or failed?pass mark-35
//check whether a no is divisible by both 3 and 5?

/*let num=1
if(num>0)
{
  console.log("Positive")
}
else
{
    console.log("Negative")
}

let num1=3
res=num1%2
if(num1%2===0)
{
    console.log("Even")
}
else
{
    console.log("Odd")
}

let mark=10
if(mark>=35)
{
    console.log("PASS")
}
else
{
    console.log("FAIL")
}

let num2=10
if(num2%3===0 && num2%5===0)
{
    console.log("Divisible by 3 and 5")
}
else
{
    console.log("Not Divisible by 3 and 5")
}

//Switch

let day=8
switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")

}

//Print the month name based on month number.
//Check whether a character is a vowel
//Create a calculator using switch

let month =10
switch(month)
{
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break
    default:
        console.log("Invalid Month")
    
}

let vowel="E"
switch(vowel)
{
    case "a":
        console.log("Its a vowel")
        break
    case "e":
        console.log("Its a vowel")
        break
    case "i":
        console.log("Its a vowel")
        break
    case "o":
        console.log("Its a vowel")
        break
    case "u":
        console.log("Its a vowel")
        break
    case "A":
        console.log("Its a vowel")
        break
    case "E":
        console.log("Its a vowel")
        break
    case "I":
        console.log("Its a vowel")
        break
    case "O":
        console.log("Its a vowel")
        break
    case "U":
        console.log("Its a vowel")
        break
    default:
        console.log("Invalid input")
}

let num1=8, num2=4, operator= "/"
switch(operator)
{
    case "+":
        res=num1+num2
        console.log("Result="+res)
        break
    case "-":
        res=num1-num2
        console.log("Result="+res)
        break
    case "*":
        res=num1*num2
        console.log("Result="+res)
        break
    case "/":
        res=num1/num2
        console.log("Result="+res)
        break
   default:
    console.log("Invalid Input")
}



    


