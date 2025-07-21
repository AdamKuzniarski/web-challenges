import StyledBox from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import FlexContainer from "@/components/FlexContainer.js";


export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <FlexContainer>
      <StyledBox />
      <StyledBox $isBlack />
      </FlexContainer>
    </div>
  );
}
