console.clear();

const bodyElement = document.body;
const darkModeButton = document.querySelector("[data-js=dark-mode-button]");
const lightModeButton = document.querySelector("[data-js=light-mode-button]");
const toggleButton = document.querySelector("[data-js=toggle-button]");

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});


let temperatur = 18

const forecast = temperatur >= 5 ? 'es ist warm' : 'arschkalt';
console.log(forecast)