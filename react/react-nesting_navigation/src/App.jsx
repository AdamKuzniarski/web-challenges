
import Header from "./components/Header.jsx";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Navigation from "./components/Navigation.jsx";
import Link from "./components/Link.jsx";
import "./styles.css";
import Button from "./components/Button.jsx";

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <Image className="round-image" src={logo} alt="logo" />
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
        <Button
          type="button"
          onClick={clickElement}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </Button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}

function Image({src, alt}) {
  return <img className="round-image" src={src} alt={alt} />;
}
