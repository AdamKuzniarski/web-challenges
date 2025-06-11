console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/
let age = 36;
const dayOfYear = 365;
const lifeSpan = 80;
const hoursDay = 24;
const sleepHours = 8;

let totalNumbersOfDays = age * dayOfYear;
const estimatedNumberOfDaysRemain = Math.round(
  dayOfYear * totalNumbersOfDays - lifeSpan
);
let lifeAlredyLived = (age * 100) / lifeSpan;
let daysSpendSleeping = totalNumbersOfDays;

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

/* console.log(`You age is ${age}`);
console.log(`You are survived ${totalNumbersOfDays} days`);
console.log(`You have only ${estimatedNumberOfDaysRemain} days left`);
console.log(`You spent ${daysSpendSleeping} days sleeping`); */

console.log(
  `Your age is ${age}, you're survied ${totalNumbersOfDays} days of your life, you have only ${lifeAlredyLived}% of your time to live, you spend ${daysSpendSleeping} days sleeping`
);
