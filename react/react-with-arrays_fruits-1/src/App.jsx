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
      {fruits.map((fruit)=>
      <Card key={fruit.id} color={fruit.color} name={fruit.name} />
      )}
    </div>
  );
}
