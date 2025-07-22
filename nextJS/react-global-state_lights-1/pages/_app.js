import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { id: 1, name: "LivingRoom", isOn: false },
    {
      id: 2,
      name: "Kitchen",
      isOn: false,
    },
    {
      id: 3,
      name: "Bedroom",
      isOn: false,
    },
    {
      id: 4,
      name: "Bathroom",
      isOn: false,
    },
    {
      id: 5,
      name: "Garage",
      isOn: false,
    },
    { id: 6, name: "Garden", isOn: false },
    { id: 7, name: "Office", isOn: false },
  ];

  const [light, setLight] = useState(initialLights);

  function toggleLight(id) {
    setLight(
      light.map((singleLight) => 
          singleLight.id === id ? {... singleLight, isOn: !singleLight.isOn} : singleLight
        
      ))
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} light={light} toggleLight={toggleLight} />
    </Layout>
  );
}
