import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, setLights, id }) {
  function handleToggle() {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  /* 
  1. routing dynmaic
  2. map(), filter() --- > Eintrag löschen 
  , find() --> id einen Wert 
  + callbacks
  3. Fetchen  
  4. bookmarken (demo gestern)
  5. Slug, id 
  6. formData Zweizelier
  7. conditiotan rendeiring 

  */
  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
