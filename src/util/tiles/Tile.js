import React from "react";
import "../../style.css";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "./beginnerTiles";

import {
  getTileUpperLevel,
  getIsTileFree,
  //getTileSelected,
} from "../tileLevelFunctions";

const Tile = ({ tile, tileLevel, onClick }) => {
  return (
    <img
      onClick={onClick || null}
      className={
        tileLevel === tileLevel1
          ? "tile"
          : tileLevel === tileLevel2
          ? "tile tileLevel2-position"
          : "tile tileLevel3-position"
      }
      src={tile?.url}
      alt={tile?.title}
    />
  );
};

export default Tile;
