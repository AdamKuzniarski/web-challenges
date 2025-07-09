import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  const [note, setNote] = useLocalStorageState("");
  const [font, setFont] = useLocalStorageState("system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}

/* 

Switch to the `./src/App.jsx` file and replace both `useState` hooks with `useLocalStorageState` hooks to make the notepad and the font selection persistent.
 The `use-local-storage-state` package is already installed. Import it like this:

```jsx
import useLocalStorageState from "use-local-storage-state";

```

## Notes

- You only have to touch the `./src/App.jsx` file.
*/
