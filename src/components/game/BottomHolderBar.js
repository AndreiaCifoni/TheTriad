import React from "react";
import Tile from "../../util/tiles/Tile";
import "../../style.css";
import { v4 as uuidv4 } from "uuid";

const BottomHolderBar = ({ bottomHolder }) => {
  return (
    <div>
      <div className="bottomHolderBar-container">
        {bottomHolder.map((tile) => {
          return (
            <Tile
              key={uuidv4()}
              tile={tile}
              className={tile ? "tile" : "tile-null"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomHolderBar;
