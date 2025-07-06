import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <main>
      <FilterList></FilterList>
      <Trigger></Trigger>
      <VisitCard></VisitCard>
      <Checkbox></Checkbox>
      <Counter></Counter>
      <Counter></Counter>
      <Input></Input>
      <NameList />
    </main>
  );
}

function FilterList() {
  const items = ["Apfel", "Banane", "Orange", "Birne", "Kiwi"];
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h2>Filterliste</h2>
      <input
        type="text"
        placeholder="Suche..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function VisitCard() {
  const [name, setName] = useState("Adam");
  const [age, setAge] = useState(35);

  function handleAge() {
    setAge((age) => age + 1);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={handleName} />
      <button onClick={handleAge}>Increment Age</button>
      <p>
        Hi my name is {name} and I am {age} years old
      </p>
    </>
  );
}

function Checkbox() {
  const [liked, setLiked] = useState(false);

  function handleChange(event) {
    setLiked(event.target.checked);
  }

  return (
    <>
      <label htmlFor="firstCheckbox">
        <input
          id="firstCheckbox"
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>You {liked ? "like this" : "don t like it"}</p>
    </>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState("");
  function handleInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <input value={inputValue} onChange={handleInput} />
      <p>You just typed: {inputValue} </p>;
    </>
  );
}

const Trigger = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <p>{show ? "My name is Adam" : ""}</p>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
    </>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((count) => count + 1);
  }
  return <button onClick={add}>{count}</button>;
}

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "Camille"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={onAddName}>Add the name</button>
    </>
  );
}
