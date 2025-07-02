import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./App";
import App from "./App";
import Button from "./Button";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <Button />
    <HelloWorld />
  </StrictMode>
);
