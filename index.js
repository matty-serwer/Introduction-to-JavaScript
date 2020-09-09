/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// let votingAge = 19

// if (votingAge > 18) {
//     console.log("true");
// }

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

// let variable1 = 20;
// const variable2 = "pizza";

// if(variable2 === "pizza") {
//     variable1 = 15;
// }

// console.log(variable1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// let yearString = "1999";
// let yearNumber = Number(yearString);
// console.log(yearString);
// console.log(yearNumber);

//Task d: Write a function to multiply a*b

// function multiply(a,b) {
//     return (a * b);
// }

// let answer = multiply(10, 13);
// console.log(answer);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

// function toDogYears (a) {
//     return a * 7;
// }

// let myAge = 39;
// let myAgeDogYears = toDogYears(myAge);

// console.log(myAgeDogYears);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// function dogFeeder(weight, age) {
//     let foodWeight;

//     if (age >= 0.1666667 && age < 0.3333333) {
//         foodWeight = weight * .1;
//     }
//     else if (age >= 0.3333333 && age < 0.5833333) {
//         foodWeight = weight * .05;
//     }
//     else if (age >= 0.5833333 && age < 1) {
//         foodWeight = weight * .04;
//     }
//     else if (age >= 1) {
//         if (weight <= 5) {
//             foodWeight = weight * .05;
//         }
//         else if (weight > 5 && weight <= 10) {
//             foodWeight = weight * .04;
//         }
//         else if (weight > 10 && weight <=15) {
//             foodWeight = weight * .03;
//         }
//         else if (weight > 15) {
//             foodWeight = weight * .02;
//         }
//     }

//     return foodWeight;
// }

// console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// function rockPaperScissors(yourThrow) {

//     let computerThrow = Math.floor(Math.random() * 3 + 1);
//     let result;

//     console.log(computerThrow);

//     if (yourThrow === "rock") {
//         if (computerThrow === 1) {
//             result = "Draw.";
//         }
//         else if (computerThrow === 2) {
//             result = "You Lost.";
//         }
//         else if (computerThrow === 3) {
//             result = "You Won!"
//         }
//     }
//     else if (yourThrow === "paper") {
//         if (computerThrow === 1) {
//             result = "You Won!";
//         }
//         else if (computerThrow === 2) {
//             result = "Draw.";
//         }
//         else if (computerThrow === 3) {
//             result = "You Lost."
//         }
//     }
//     else if (yourThrow === "scissors") {
//         if (computerThrow === 1) {
//             result = "You Lost.";
//         }
//         else if (computerThrow === 2) {
//             result = "You Won!";
//         }
//         else if (computerThrow === 3) {
//             result = "Draw."
//         }
//     }
//     return result;
// }

// console.log(rockPaperScissors("paper"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// function toMiles(kilometers) {
//     let miles;
//     miles = kilometers * 0.621371;
//     return miles;
// }

// console.log(toMiles(20));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// function feetToCM(feet) {
//     let centimeters;
//     centimeters = feet * 30.48;
//     return centimeters;
// }

// console.log(feetToCM(6));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

// function annoyingSong(number) {
//     for(i = number; i > 0; i--) {
//         console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + (i - 1) + " bottles of soda on the wall");
//     }
// }

// annoyingSong(5);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

// function toLetterGrade(numGrade) {
//     let letterGrade;

//     if (numGrade >= 90 && numGrade <= 100) {
//         letterGrade = 'A';
//     }
//     else if (numGrade >= 80 && numGrade < 90) {
//         letterGrade = 'B';
//     }
//     else if (numGrade >= 70 && numGrade < 80) {
//         letterGrade = 'C';
//     }
//     else if (numGrade >= 60 && numGrade < 70) {
//         letterGrade = 'D';
//     }
//     else if (numGrade < 60) {
//         letterGrade =  'F';
//     }

//     return letterGrade
// }

// console.log(toLetterGrade(80));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

// let testString = "This Is so Cool";

// console.log(vowelCount(testString));

// function vowelCount(word) {
//     word = word.toLowerCase();
//     let wordArray = Array.from(word);
//     let numVowels = 0;

//     wordArray.forEach(function(letter) {
//         if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//             numVowels++;
//         }
//     })

//     return numVowels;
// }

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rockPaperScissors(yourThrow) {
  let computerThrow = Math.floor(Math.random() * 3 + 1);
  let result;

  if (computerThrow === 1) {
      result = "The computer threw rock! " 
  } else if (computerThrow === 2) {
      result = "The computer threw paper! "
  } else if (computerThrow === 3) {
      result = "The computer threw scissors! "
  }

  if (yourThrow === "rock") {
    if (computerThrow === 1) {
      result += "Draw.";
    } else if (computerThrow === 2) {
      result += "You Lost.";
    } else if (computerThrow === 3) {
      result += "You Won!";
    }
  } else if (yourThrow === "paper") {
    if (computerThrow === 1) {
      result += "You Won!";
    } else if (computerThrow === 2) {
      result += "Draw.";
    } else if (computerThrow === 3) {
      result += "You Lost.";
    }
  } else if (yourThrow === "scissors") {
    if (computerThrow === 1) {
      result += "You Lost.";
    } else if (computerThrow === 2) {
      result += "You Won!";
    } else if (computerThrow === 3) {
      result += "Draw.";
    }
  }
  return result;
}

let userThrow = prompt("Enter rock, paper, or scissors: ");

alert(rockPaperScissors(userThrow));
