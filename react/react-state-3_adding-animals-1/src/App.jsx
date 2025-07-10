import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddAnimal(data);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <main className="app">
      <Form onSubmit={handleSubmit} onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
