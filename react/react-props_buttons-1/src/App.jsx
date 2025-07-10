export default function App() {
  function handleClick() {
    console.log("clicked second time");
  }
  return (
    <>
      <Button background={"red"} text={"test"}></Button>
      <Button
        background={"red"}
        text={"Second disabled"}
        isDisabled={false}
        onHandleClick={handleClick}
      ></Button>
    </>
  );
}

function Button({ text, background, isDisabled, onHandleClick }) {
  return (
    <button
      disabled={isDisabled}
      style={{ color: background }}
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
}
