export default function App() {
  const handleClick =()=>{
    alert('Clicked')
    
  }
  return (
    <>
      <Button text={"yes"} color={"red"} disabled={false} onClick={handleClick} />
      <Button text={"no"} disabled={true} color={"blue"} />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button  disabled={disabled} style={{ backgroundColor:  color  }} onClick={onClick}   >
      {text}
    </button>
  );
}
