/*
*****************************************************
***************Oppgave nr 1**************************
******************************************************
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
*****************************************************
***************Oppgave nr 2**************************
******************************************************

Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
*/
const userMale = true

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);

/*
*****************************************************
***************Oppgave nr 3**************************
******************************************************

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
console.log(greetBasedOnHour("Per", 12));
console.log(greetBasedOnHour("Anton", 2));
console.log(greetBasedOnHour("Isak", 26));

/*
*****************************************************
***************Oppgave nr 4**************************
******************************************************

Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the of 24/13
 sum
*/


const calculateRatio = (num1, num2) => {
  if (num1 > num2) {
    return num1 / num2;
  } else {
    return num2 / num1;
  }
};

// Example usage:
const number1 = 24;
const number2 = 13;
const result = calculateRatio(number1, number2);
console.log(result);

/*
*****************************************************
***************Oppgave nr 5**************************
******************************************************

Write an IF/ELSE conditional statement that checks whether username is empty,
that the user age is 18+, and that userIsBlocked is false.

(HINT: Use the && (logical AND) to check several things in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true and
and the goToPage variable to "/home" then console.log a welcome message.

If any of the conditions for logging in are not met, console.log an error message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly
*/

let username = "ja"; 
let userAge = 28; 
let userIsBlocked = false;

let userIsLoggedIn = false;
let goToPage = "";

if (username !== "" && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Welcome! You are now logged in.");
} else {
  console.log("Error: Unable to log in. Please check your credentials or contact support.");
}

function createStars() {
  const starsContainer = document.querySelector('.stars');
  
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
}

createStars();