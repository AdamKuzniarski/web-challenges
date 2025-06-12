console.clear();

const bodyElement = document.body;
const darkModeButton = document.querySelector("[data-js=dark-mode-button]");
const lightModeButton = document.querySelector("[data-js=light-mode-button]");
const toggleButton = document.querySelector("[data-js=toggle-button]");

// Beim Laden prüfen, ob Dark Mode gespeichert ist
if (localStorage.getItem("darkMode") === "enabled") {
  bodyElement.classList.add("dark");
}

/* darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  localStorage.setItem("darkMode", "disabled");
}); */

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  // Status speichern
  if (bodyElement.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});