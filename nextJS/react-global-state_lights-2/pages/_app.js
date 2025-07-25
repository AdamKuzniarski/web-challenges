import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initilaValue = [
    { id: 1, name: "livingRoom", isOn: false [1,2,3 ] },
    { id: 2, name: "bedroom", isOn: false },
    { id: 3, name: "kitchen", isOn: false },
    { id: 4, name: "bathroom", isOn: false },
    { id: 5, name: "garage", isOn: false },
    { id: 6, name: "garden", isOn: false },
    { id: 7, name: "office", isOn: false },
    { id: 8, name: "porch", isOn: false },
  ];
  const [lights, setLights] = useState(initilaValue);
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} setLights={setLights} />
    </Layout>
  );
}
