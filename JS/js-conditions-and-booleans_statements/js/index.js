console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome");
} else {
  console.log("Access deneid!");
}

// Part 2: Even / Odd
const number = 6.0;
if (number % 2 === 0) {
  console.log("is even");
} else {
  console.log("odd!");
}

// Part 3: Hotdogs
const numberOfHotdogs = 99;
if (numberOfHotdogs > 1000000) {
  console.log("the price 0.10€");
} else if (numberOfHotdogs < 1000000 && numberOfHotdogs > 100) {
  console.log("the price 1€");
} else if (numberOfHotdogs < 100 && numberOfHotdogs > 5) {
  console.log("the price 1.50€");
} else {
  console.log("the price 2€");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still nee to learn.." : "Partytime!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "Coach" + "!";

console.log(greeting === userName ? greeting : userName);
