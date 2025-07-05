import "./styles.css";
import { useState } from "react";
export default function App() {
  const [isActive, setActive] = useState(false)

  function handleClick() {
    setActive(!isActive)

  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? 'Activate':'Deactivate'}</button>
    </main>
  );
}
/* 
# React State 1: Box


- Replace the `let` variable with the `useState` function.
  - Don't forget to import `useState` from React.
  - Set the initial state value to `false`.
- Inside the `handleClick` function, use the `set` function from `useState` to update the value of the `isActive` state.

Once you’ve implemented these changes, you should be able to toggle the box’s color using the button! 🎉

### Bonus

Can you use the new state to toggle the button text between “Activate” and “Deactivate”?

### Hacker Bonus

Check the console and pay close attention to the logged value of `isActive`. You will notice that `console.log()` does not immediately show the value you just set with the `set` function one line before. For example, if you set `isActive` to `true`, it will log `false` instead, and vice versa.

This is not a bug - it is the expected behavior due to how React’s state works fundamentally.

Can you explain why this happens?

*/