import Card from "./components/Card";

export const fruits = [
  { id: 1, name: "Apple", color: "green" },
  { id: 2, name: "Grape", color: "purple" },
  { id: 3, name: "Orange", color: "orange" },
  { id: 4, name: "Banana", color: "yellow" },
  { id: 5, name: "Pear", color: "blue" },
];
export default function App() {
  return (
    <div className="app">
      <Card />
      <FrutisCard  />
    </div>
  );
}

function FrutisCard() {
  return (
    <ul>
      {fruits.map(({ id, name, color,  }) => (
        <li style={{background: color}} key={id}>
          {name} 
        </li>
      ))}
    </ul>
  );
}

/* 
# React Arrays: Fruits

- Hint: the ids need to be unique.

Use the array method `map` to create a Card component for each fruit in your array. Use the name of each object as the text of the component and the id as the key prop.

## Bonus

Change the `Card` component so that it receives a `color` prop and set the background-color of the Card to this value. Use the color property of each fruit object for this prop.

- Hint: check the `./src/components/Card.css` file for some cues as to how to handle having the colors change automatically
*/
