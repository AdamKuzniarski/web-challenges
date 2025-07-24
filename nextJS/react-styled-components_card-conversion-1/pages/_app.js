import GlobalStyle from "../styles";
import "../components/Card/Card.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showEmojis, setShowEmojis] = useState(true);
  const [showSmile, setShowSmile] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        showEmojis={showEmojis}
        setShowEmojis={setShowEmojis}
        showSmile={showSmile}
        setShowSmile={setShowSmile}
      />
    </>
  );
}
