console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  output.textContent = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  pizza1 = updatePizzaDisplay(pizzaInput1.value, )
  // Write your code here
});

pizzaInput2.addEventListener("input", () => {
  output.textContent = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  // Write your code here
});

// Task 1: Define the function `calculatePizzaGain` here
function calculatePizzaGain(diameter1, diameter2) {
  let area1 = Math.PI * Math.pow(diameter1 / 2, 2);
  let area2 = Math.PI * Math.pow(diameter2 / 2, 2);
  let pizzaGain = ((area2 - area1) / area1) * 100;
  return Math.round(pizzaGain);
}

// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
  let newDisplaySize = (newSize / 24) * 100;
 return pizzaElement.style.width = `${newDisplaySize}px`;
}

// Task 3: Define the function `updateOutputColor` here
