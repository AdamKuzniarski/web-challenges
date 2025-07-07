import "./Tag.css";

export default function Tag({ tag }) {
  /* if (tag === "admin") {
    return <li className="tag--highlight">{tag}</li>;
  } */

  const changeClass = tag === "admin" ? "tag--highlight" : "tag";
  return <li className={changeClass}>{tag}</li>;
}
/* 
# React Arrays: Users


3. At last, refactor the `Tag` component: it should receive an additional class called 'tag--highlight' if the `tag` prop equals the string 'admin' (compare the `Tag.css` file).

## Notes

- You only have to touch the files `./src/App.jsx`, `./src/Card.jsx`, and `./src/Tag.jsx`.

*/
