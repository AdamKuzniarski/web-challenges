export default function App() {
  return (
    <>
      <Greetring name={"Adam"} isCoach={false} />
      <Greetring name={"Ryba"} isCoach={false} />
      <Greetring name={"Rybus"} isCoach={false} />
      <Greetring name={"Flo"} isCoach />
    </>
  );
}

function Greetring({ name, isCoach }) {
  return <p> {isCoach ? <p>Coach {name} </p> : <p>Hello {name}</p>}</p>;
}
