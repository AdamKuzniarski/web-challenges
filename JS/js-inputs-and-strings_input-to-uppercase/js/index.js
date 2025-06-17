console.clear();

const inputElement = document.querySelector("[data-js=first-input]");
const buttonElement = document.querySelector("[data-js=button-uppercase]");

buttonElement.addEventListener("click", () => {
  const toUpperElement = inputElement.value.toUpperCase();
  console.log(toUpperElement);
});

/* console.log({inputElement, buttonElement}) */
