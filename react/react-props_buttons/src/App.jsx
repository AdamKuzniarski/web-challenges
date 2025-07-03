console.clear()
export default function App() {
  function handleClick(){
    console.log('hi from separate function!')
  }
  return (
    <>
      <Button text={"I'm First!"} disabled color={"red"} bgColor={"white"} />
      <Button
        text={"I'm second"}
        disabled={false}
        color={"yellow"}
        bgColor={"black"}
      />
      <Button
        text={"Third"}
        disabled={false}
        color={"green"}
        bgColor={"blue"}
        onHandle={handleClick}
      />
    </>
  );
}

function Button({ color, disabled, text, bgColor, onHandle }) {
  return (
    <>
      <button disabled={disabled} style={{ color: color, background: bgColor }} onClick={onHandle}>
        {text}
      </button>
    </>
  );
}

