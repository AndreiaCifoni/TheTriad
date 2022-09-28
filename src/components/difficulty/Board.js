import React, { useState } from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "../../util/tiles/beginnerTiles";
import {
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight,
  removeTile,
  getIsTileFree,
  getTileUpperLevel,
} from "../../util/tileLevelFunctions";
import "../../style.css";

const Board = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  const tileSelected = (isTileFree, tileLevel, x, y) => {
    if (isTileFree) {
      setSelectedTile(tileLevel[x][y]);
      return tileLevel[x][y];
    }
  };

  const onTileClick = (layoutIndex, rowIndex, columnIndex) => {
    const z = layoutIndex;
    const x = rowIndex;
    const y = columnIndex;
    const tileLevel = boardLayout[z];
    const tileUpperLevel = getTileUpperLevel(z, boardLayout);
    const isTileFree = getIsTileFree(x, y, z, tileUpperLevel);

    tileSelected(isTileFree, tileLevel, x, y);

    removeTile(x, y, tileLevel);
  };
  console.log(selectedTile);

  return (
    <div>
      {boardLayout.map((tilelevel, layoutIndex) => {
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
