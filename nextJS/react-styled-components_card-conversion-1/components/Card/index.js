import styled, { css } from "styled-components";
import Link from "next/link";
import { useState } from "react";
export default function Card({ showEmojis, setShowEmojis, setShowSmile, showSmile }) {
 
  return (
    <CardWrapper>
      <button onClick={() => setShowEmojis(!showEmojis)}>
        {showEmojis ? "Zeige ❤️" : "Zeige 🙈"}
      </button>
      <CardTitle>Homer Simpson</CardTitle>
      <CardDescription>
        Homer Jay Simpson <StyledLink href={"#"}>is a fictional</StyledLink>{" "}
        character and the main protagonist of the American animated sitcom The
        Simpsons. He is voiced by Dan Castellaneta and first appeared, along
        with the rest of his family, in The Tracey Ullman Show short Good Night
        on April 19, 1987.
      </CardDescription>
      <StyledUL $emojis={showEmojis}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </StyledUL>
      <StyledButton onClick={() => setShowSmile(!showSmile)}>
        {showSmile ? "😍" : "👀"}
      </StyledButton>
    </CardWrapper>
  );
}

const StyledButton = styled.button`
  padding: 50px 150px;
  font-size: 50px;
  background-color: red;
`;

const CardWrapper = styled.div`
  background: green;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const CardTitle = styled.h3`
  margin-top: 0;
  color: red;
  margin-bottom: 12px;
  font-size: 1.25rem;
`;

const CardDescription = styled.p`
  margin-top: 0;
  color: #fff;
  margin-bottom: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledUL = styled.ul`
  color: red;
  font-size: 2rem;

  list-style-type: ${(props) => (props.$emojis ? "'❤️'" : "'🙈'")};
`;
