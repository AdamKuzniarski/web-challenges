import "./styles.css";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    setCount((count) => count - 1);
  }
  return (
    <Counter
      value={count}
      onDecrement={handleDecrement}
      onIncrement={handleIncrement}
    />
  );
}
