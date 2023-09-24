/*
1.Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/

function isEven (number) {
  return number % 2 === 0;
}


function isOdd (number) {
  return number % 2 !== 0;
}
//test
console.log((isEven(5)))
console.log((isEven(6)))
console.log((isOdd(5)))
console.log((isOdd(6)))

/*
2.

Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
*/
// let userTitle = "Mrs"

// if (userTitle === "Mr"){
//     console.log("It is Mr !!!")
// } else if (userTitle != "Mr"){
//     console.log("It is not Mr")
// }

// console.log(userTitle)




/*
3.

Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working.
*/

function giveTime (){
    const timeOfDayArray = [
"Good night ($`name` received)", 
"Good morning (name received)", 
"Good day (name received)", 
"Good evening (name received)",
"Invalid time", 
]


const randomNumber = Math.floor((Math.random() * timeOfDayArray.length))
    const timeIs= timeOfDayArray[randomNumber]
    return timeIs
    }
console.log(giveTime())


function giveTime (){
    if (number < 6 )