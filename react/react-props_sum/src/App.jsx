export default function App() {
  return (
    <>
      <Sum valueA={1} valueB={5} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return <p> Sum of these Values is: {valueA + valueB}</p>;
}
