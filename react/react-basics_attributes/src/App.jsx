import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">Heading H2</h2>
      <form action="">
        <label className="label" id="text1" htmlFor="text1">
          Add your text
        </label>
        <input htmlFor="text1" type="text" />
      </form>
      <a className="article__link" href="http://wikipedia.de">
        Wikepedia
      </a>
    </article>
  );
}
