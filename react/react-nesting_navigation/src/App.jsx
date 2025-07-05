import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header.jsx";
import Navigation from "./components/Nav.jsx";
import Link from "./components/Link.jsx";
import Image from "./components/Image.jsx";
import Button from "./components/Button.jsx";
export default function App() {
  
  function clickHandle(){
    console.log('Greeting from App!')
  }
  return (
    <>
     <Header>
      <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <Button handleClick={clickHandle} aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </Button>
     </Header>
      <main>content goes here…</main>
    </>
  );
}


