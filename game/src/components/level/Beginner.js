import React from "react";
import BeginnerTiles from "../tiles/beginnerTiles";
import "../../style.css";

const Beginner = () => {
  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  shuffle(BeginnerTiles);

  return (
    <div>
      <h1>Beginner Game</h1>
      <ul>
        {BeginnerTiles.map((tile) => {
          return (
            <li>
              <img className="tile-img" src={tile.url} alt={tile.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Beginner;
