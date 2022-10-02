import React from "react";
import "../../style.css";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "./beginnerTiles";

const Tile = ({
  url,
  title,
  id,
  layoutIndex,
  rowIndex,
  columnIndex,
  tileLevel,
}) => {
  const onClickTile = (layoutIndex, rowIndex, columnIndex, tileLevel) => {
    const z = layoutIndex;
    const x = rowIndex;
    const y = columnIndex;
    //const tileLevel = boardLayout[z];

    //selectTile()
    console.log(tileLevel);
  };

  return (
    <img
      onClick={() => onClickTile(layoutIndex, rowIndex, columnIndex, tileLevel)}
      className={
        tileLevel === tileLevel1
          ? "tile"
          : tileLevel === tileLevel2
          ? "tile tileLevel2Position"
          : "tile tileLevel3Position"
      }
      src={url}
      alt={title}
    />
  );
};

export default Tile;
