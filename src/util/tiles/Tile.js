import React from "react";
import "../../style.css";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "./beginnerTiles";

import { getTileUpperLevel, getIsTileFree } from "../tileLevelFunctions";

const Tile = ({ tile, tileLevel, onClick }) => {
  return (
    <img
      onClick={onClick || null}
      className={tile ? "tile" : "tile-null"}
      src={tile?.url}
      alt={tile?.title}
    />
  );
};

export default Tile;
