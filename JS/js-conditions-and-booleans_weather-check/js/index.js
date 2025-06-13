// Change this value to test different "weather" conditions.
const weather = "rainy";
const temperature = 5;

switch (weather) {
  case "rainy":
    console.log("Take your funcking umbrella!");
    break;

  case "sunny":
    if (temperature > 20) {
      console.log("It's sunny and warm!");
    } else if (temperature < 20) {
      console.log("It's sunny, but a bit chilly!");
    }
    /* console.log("It's sunny!"); */

    break;
  case "snowy":
    if (temperature < 0) {
      console.log("take your fucking scarf!");
    } else {
      console.log("snowy!");
    }
    break;
  default:
    console.log("I'm not sure what weather is");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
