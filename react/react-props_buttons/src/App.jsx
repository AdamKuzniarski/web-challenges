console.clear();
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
export default function App() {
  function clickHandle() {
    console.log("Hi!");
  }
  return (
    <>
      <Button clickEvent={clickHandle} text={"I'm frist"} color={"teal"} />
      <Button text={"I'm second"} backgroundColor={"teal"} />
      <Button text={"I'm Third -disabled"} isDisabled={true} color={"red"} />
      <ShoppingList />
      <ShoppingList backgroundColor={"teal"} />
    </>
  );
}

function Button({ text, color, backgroundColor, isDisabled, clickEvent }) {
  return (
    <button
      onClick={clickEvent}
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

function ShoppingList({ backgroundColor }) {
  const bgColor = "teal";
  const results = products.map((product) => {
    return (
      <li
        key={product.id}
        style={{
          backgroundColor: backgroundColor,
          color: product.isFruit ? "red" : "purple",
        }}
      >
        {product.title}
      </li>
    );
  });
  return <ul>{results}</ul>;
}
