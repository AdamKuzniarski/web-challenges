
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

const initialMountain = {
  name: "Mount Everest",
  values: {
    altitude: 8848,
    mountainRange: "Himalayas",
  },
};

export default function Form() {
 
  const [mountain, updateMountain] = useImmer(initialMountain);

  function handleNameChange(event) {
    const newName = event.target.value;
    updateMountain((draft) => {
      draft.name = newName;
    });
    
  }

  function handleAltitudeChange(event) {
    const newAltitude = event.target.value;
    updateMountain((draft) => {
      draft.values.altitude = newAltitude;
    });
  }

  function handleMountainRangeChange(event) {
    const newMountainRange = event.target.value;
    updateMountain((draft) => {
      draft.values.mountainRange = newMountainRange;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
