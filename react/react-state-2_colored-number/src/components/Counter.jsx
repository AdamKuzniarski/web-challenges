import ColoredNumber from "./ColoredNumber";
import { useState } from "react";
export default function Counter() {
  // Initialize state to hold the current count
  const [count, setCount] = useState(0);
  console.log("Counter component rendered with count:", count);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(count + 1)} // Update count when clicked
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)} // Update count when clicked
        >
          -
        </button>
      </div>
    </div>
  );
}
/* 
# React State 2: Colored Number

The current count is passed to the `./src/components/ColoredNumber.jsx` component, which displays the number with a color that depends on its value.

However, at the moment, clicking the buttons doesn't change anything. Let's use state to fix that.

## Tasks

Refactor the `./src/components/Counter.jsx` component so that it updates the displayed number when a button is clicked.

You can follow these hints as a guideline:

- It seems like the `Counter` component needs a state. What would be an appropriate initial value?
- Pass the current count to the `ColoredNumber` component via the `value` prop.
- Update the state when the buttons are clicked. How can you achieve that?
*/
