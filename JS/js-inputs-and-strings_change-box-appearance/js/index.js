console.clear();

const boxElement = document.querySelector('[data-js="box"]');

const colorElelment = document.querySelector('[data-js="input-color"]');
const borderRadiusElement = document.querySelector('[data-js="input-radius"]');
const rotationElement = document.querySelector('[data-js="input-rotation"]');

colorElelment.addEventListener("input", () => {
  boxElement.style.backgroundColor = `hsl(${colorElelment.value}deg, 50%, 50%) `;
  console.log(colorElelment.value);
});

borderRadiusElement.addEventListener("input", () => {
  boxElement.style.borderRadius = `${borderRadiusElement.value}px`;
});

rotationElement.addEventListener("input", () => {
  boxElement.style.transform = `rotate(${rotationElement.value}deg)`;
  console.log(rotationElement.value);
});


