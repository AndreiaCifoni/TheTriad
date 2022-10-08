import React from "react";
import Tile from "../../util/tiles/Tile";
import "../../style.css";

const Board = ({ getTileSelected, tileLayout }) => {
  return (
    <div className="board-container">
      {tileLayout.map((tileLevel, layoutIndex) => {
        return tileLevel.map((tileRow, rowIndex) => {
          return (
            <div className="tileLevel-container">
              {tileRow.map((tile, columnIndex) => {
                return (
                  <Tile
                    tile={tile}
                    onClick={() => {
                      getTileSelected(rowIndex, columnIndex, layoutIndex);
                    }}
                    className={
                      tile
                        ? layoutIndex === 0
                          ? "tile"
                          : layoutIndex === 1
                          ? "tile tileLevel2-position"
                          : "tile tileLevel3-position"
                        : "tile-null"
                    }
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
