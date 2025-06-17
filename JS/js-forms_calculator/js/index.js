console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dataForm = new FormData(event.target);
  const data = Object.fromEntries(dataForm);

  let result;

  // --v-- write your code here --v--
  result = add(Number(data.numberA), Number(data.numberB));
  result = subtract(Number(data.numberA), Number(data.numberB));
  result = multiply(Number(data.numberA), Number(data.numberB));
  result = divide(Number(data.numberA), Number(data.numberB));
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
