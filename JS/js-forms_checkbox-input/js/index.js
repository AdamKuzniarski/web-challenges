console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", () => {
  console.log(tosCheckbox.checked)
  
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (tosCheckbox.checked) {
    console.log("checked");
    alert("Form submitted");
  } else {
    console.log("not checked");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
