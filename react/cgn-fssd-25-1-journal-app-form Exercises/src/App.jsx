import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntryData) {
    //                       ^--value that will be filled in EntryForm (will be come data)

    // Create a new entry object (has to have the same structure as the other entries)
    const newEntry = {
      id: crypto.randomUUID(),
      date: new Date().toDateString(),
      motto: newEntryData.motto,
      notes: newEntryData.notes,
    };

    // Create a new list of entries which will be rendered instead of the old one
    const updatedEntries = [...entries, newEntry];

    // replace entries with updatedEntries and trigger a rerender.
    setEntries(updatedEntries);
  }
  function handlePrinting(inputValue){
    console.log(inputValue)
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection values={entries} />
      </main>
      <Square onSquare={handlePrinting}/>
    </div>
  );
}

export default App;

function Square({ onSquare }) {
  const shape = "printedSquare";
  return <button onClick={() => onSquare(shape)}>SquareButton</button>;
}
