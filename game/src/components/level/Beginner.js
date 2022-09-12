import React, { useState } from "react";
import BeginnerTilesList from "../tiles/beginnerTilesList";
import randomTile from "../tiles/randomTile";
import "../../style.css";

const Beginner = () => {
  const [selected, setSelected] = useState(false);

  const randomBeginner = randomTile(BeginnerTilesList);

  const onSelected = () => {
    setSelected();
  };

  return (
    <div>
      <h1>Beginner Game</h1>
      <ul>
        {randomBeginner.map((tile, index) => {
          return (
            <li key={index}>
              <img
                onClick={onSelected}
                className={selected ? "tile-img tile-selected" : "tile-img"}
                src={tile.url}
                alt={tile.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Beginner;
