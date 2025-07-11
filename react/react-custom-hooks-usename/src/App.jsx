import useName from "./hooks/useName";
import "./styles.css";

export default function App() {
  const { firstName, lastName, fullName, setFirstName, setLastName } =
    useName();
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </form>
      <h2>The full name:</h2>
      <output>{fullName}</output>
    </>
  );
}
