import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  levelLayout,
} from "../../util/tiles/beginnerTiles";
import {
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight,
  removeTile,
  isTileFree,
  getTileUpperLevel,
} from "../../util/tileLevelFunctions";
import "../../style.css";

const Board = () => {
  const onTileClick = (layoutIndex, rowIndex, columnIndex) => {
    const z = layoutIndex;
    const x = rowIndex;
    const y = columnIndex;
    const tileLevel = levelLayout[z];
    const tileUpperLevel = getTileUpperLevel(z, levelLayout);

    isTileFree(x, y, z, tileUpperLevel);
    removeTile(x, y, tileLevel);
  };

  return (
    <div>
      {levelLayout.map((tilelevel, layoutIndex) => {
        return tilelevel.map((tileRow, rowIndex) => {
          return (
            <div>
              {tileRow.map((tile, columnIndex) => {
                return (
                  <img
                    onClick={() =>
                      onTileClick(layoutIndex, rowIndex, columnIndex)
                    }
                    className={
                      tilelevel === tileLevel1
                        ? "tile-img"
                        : tilelevel === tileLevel2
                        ? "tile-img tileLevel2Position"
                        : "tile-img tileLevel3Position"
                    }
                    src={tile?.url}
                    alt={tile?.title}
                  />
                );
              })}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Board;
