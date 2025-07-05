import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
 const [isFavorite,setFavorite] = useState(false)

 

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setFavorite(!isFavorite)
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
