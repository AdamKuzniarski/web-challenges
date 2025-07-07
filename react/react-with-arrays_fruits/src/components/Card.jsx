import "./Card.css";
import { fruits } from "../App";
export default function Card({ name }) {
  return  (
    <ul>
      {fruits.map(({ id, name, color,  }) => (
        <li style={{background: color}} key={id}>
          {name} 
        </li>
      ))}
    </ul>
  );
}
