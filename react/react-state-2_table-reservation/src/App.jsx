import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
 table-reservation
  const [people, setPeople] = useState(0);
  function increment() {
    setPeople(people + 1);
  }
  function decrement() {
    setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter people={people} setPeople={setPeople} onIncrement={increment} onDecrement={decrement} />
      <p>You are going to reserve a table for {people} people.</p>

    const [people, setPeople] = useState(0); 
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter  />
      <p>You are going to reserve a table for 2 people.</p>
 main
    </div>
  );
}
 