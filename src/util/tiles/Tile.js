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

const Tile = ({
  url,
  title,
  id,
  layoutIndex,
  rowIndex,
  columnIndex,
  tileLevel,
  getTileSelected,
}) => {
  const onClickTile = () => {
    const z = layoutIndex;
    const x = rowIndex;
    const y = columnIndex;

    //const tileSelected = getTileSelected(isTileFree, tileLevel, x, y);

    getTileSelected(x, y, z);

    //console.log(tileSelected);
  };

  return (
    <img
      onClick={onClickTile}
      className={
        tileLevel === tileLevel1
          ? "tile"
          : tileLevel === tileLevel2
          ? "tile tileLevel2-position"
          : "tile tileLevel3-position"
      }
      src={url}
      alt={title}
    />
  );
};

export default Tile;
