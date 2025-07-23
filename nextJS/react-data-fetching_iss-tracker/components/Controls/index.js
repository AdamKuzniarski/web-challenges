import {
  ControlsContainer,
  ControlsButton,
  ControlsDisplay,
} from "./Controls.styled";

export default function Controls({ longitude, latitude, onRefresh }) {
 // Fallback-Werte falls longitude oder latitude undefined sind
  const safeLongitude = longitude || 0;
  const safeLatitude = latitude || 0;
   
  return (
    <ControlsContainer>
      <ControlsDisplay>Lat: {safeLatitude.toFixed(5)}</ControlsDisplay>
      <ControlsDisplay>Long: {safeLongitude.toFixed(5)}</ControlsDisplay>
      <ControlsButton type="button" onClick={onRefresh}>
        Refresh
      </ControlsButton>
    </ControlsContainer>
  );
}
