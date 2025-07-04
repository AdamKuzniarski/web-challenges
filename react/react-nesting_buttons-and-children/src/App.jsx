import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I&apos;m first </Button>
      <Button>I&apos;m second </Button>
      <Button>I&apos;m Third</Button>
      <Button>I&apos;m Fourth</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

