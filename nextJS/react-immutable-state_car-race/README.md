# React Immutable State: Car Race

Everyone loves (electric) car racing, right? Let's become the champion!

## Task

- Start the development server and make yourself familiar with the application.
- Open the browser: there are five cars, each has its own track with a finish line and a number how long the last distance driven was.
- Try to click a car: it's not yet moving.
- Check the [`CarRace component`](components/CarRace/CarRace.js): the `moveCar` function is not working.
- Check the `utils/utils.js`: it's an array with five car objects, each car contains two keys: the `emoji` as string and the `position` object. This object determines the exact position of the car on its track (`x` key) and the distance covered with the last button click.

Switch to the [`CarRace component`](components/CarRace/CarRace.js) again.

Your task is to implement the `moveCar` function so that the `position` object of the clicked car is updated.

### Updating with Spread Syntax

Inside of the `moveCar` function, call `setCars` and update the `cars` state.

- Find the object in `cars` which is equivalent to `clickedCar` (Hint: `.map` + and some unique identifier).
- When processing the `clickedCar`, make sure to copy all relevant objects before updating them.
- After the update, the updated car should have
  - `position.x` with a value of the previous `x` value + the `coveredDistance`;
  - `lastDistance` with the value of the `coveredDistance`.

> ✨ You should no be able to click a car and it moves forward! Can you win the race?

### Updating with `immer`

Refactor the `moveCar` function so that it uses `immer` instead of the spread syntax.

You can use the following hints as guideline:

- `immer` and `useImmer` are already installed, so you just have to import what you need.
- Update the state declaration: change `setCars` to `updateCars` and `useState()` to `useImmer()`.
- Use the `draft` array to find the index of the car or the car you want to update. Which method comes to mind for finding an element or it index?
- Combine the `draft` array with the found `index` or element to assign the same values to `position.x` and `position.lastDistance` as before.

> ✨ Congratulations, your app works as before, but uses the `useImmer` hook now! Do you see any advantages of this hook as soon as the state becomes more complex?

## Notes

- You only have to touch the `./components/CarRace/CarRace.js` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
