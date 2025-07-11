import { useState } from "react";

export default function useName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;
console.log(fullName)

  return {firstName, lastName, fullName, setFirstName, setLastName};
}
