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

// let userTitle(userMale) = "Mr"
// let userMale;
// if (userMale === "Mr"){
//     console.log("It is Mr !!!")
// } else if (userMale === "Mrs"){
//     console.log("It is not Mr it is Mrs")
// }

// console.log(userTitle)

// function userTitle(userMale) {
//   let userMale =("Mr") ? "Mr" : "Mrs";
// }
// if (userMale = "Mr"){
// console.log("it is Mr")
// }  else {
//  (userMale = "Mrs")
// console.log("it is not Mr it is Mrs")
// }



// userTitle("Mrs")
const userMale = true

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);














// let userTitle = "Mr"
// let userMale;
// if (userMale === "Mr"){
//     console.log("It is Mr !!!")
// } else if (userMale === "Mrs"){
//     console.log("It is not Mr it is Mrs")
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
function greetBasedOnHour(name, hour) {
  if (hour >= 0 && hour < 6) {
    return `Good night !! Sleep well ${name}`;
  } else if (hour >= 6 && hour < 12) {
    return `Good morning sunshine! ${name}`;
  } else if (hour >= 12 && hour < 18) {
    return `Good day sir ${name}`;
  } else if (hour >= 18 && hour <= 24) {
    return `Good evening your excellency ${name}`;
  } else {
    return "Invalid time, write another time you moron!!";
  }
}

console.log(greetBasedOnHour("Piotr", 11));
console.log(greetBasedOnHour("Kate", 22));
console.log(greetBasedOnHour("Per", 6));
console.log(greetBasedOnHour("Anton", 2));

/*4.

Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13

*/

const twoNumbers =(num1, num2) => {

  const largest = num1 > num2 ? num1 : num2;
  const smallest = num1 > num2 ? num1 : num2;

const result = largest/smallest
return result;

}
const num1= 13;
const num2= 24;

const divisionAvTwoNumbers =  twoNumbers(num1, num2)
console.log(divisionAvTwoNumbers)