console.clear();

const bodyElement = document.body;
const darkModeButton = document.querySelector("[data-js=dark-mode-button]");
const lightModeButton = document.querySelector("[data-js=light-mode-button]");
const toggleButton = document.querySelector("[data-js=toggle-button]");

// Beim Laden prüfen, ob Dark Mode gespeichert ist
if (localStorage.getItem("darkMode") === "enabled") {
  bodyElement.classList.add("dark");
}


toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  // Status speichern
  if (bodyElement.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
