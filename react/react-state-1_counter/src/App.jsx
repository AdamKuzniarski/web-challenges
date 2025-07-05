import { useState } from "react";
import "./styles.css";

export default function App() {
  const [countVar, setCounter] = useState(0);

  function increase() {
    setCounter(countVar + 1);
  }

  function decrease() {
    setCounter(countVar - 1);
  }

  return (
    <div className="container">
      <h1>{countVar}</h1>
      <div className="button-container">
        <button type="button" onClick={decrease}>
          -
        </button>
        <button type="button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}


