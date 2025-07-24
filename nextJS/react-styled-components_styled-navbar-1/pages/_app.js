import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";
import { useState } from "react";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StlyedButton = styled.button`
  background: red;
  padding: 50px 75px;
  color: aliceblue;
`

export default function App({ Component, pageProps }) {
  const [smile, setSmile] = useState(false)
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
      <StlyedButton onClick={()=>setSmile(!smile)}>{smile ?"☺️" :"🙈"}</StlyedButton>
      <Component {...pageProps} />
    </>
  );
}
