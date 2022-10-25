import React from "react";
import Tile from "../../util/tiles/Tile";
import "../../style.css";
import { v4 as uuidv4 } from "uuid";

const Board = ({ getTileSelected, tileLayout }) => {
  return (
    <div className="board-container">
      {tileLayout.map((tileLevel, layoutIndex) => {
        return (
          <div
            className={
              layoutIndex === 0
                ? "board-level1 click-through"
                : layoutIndex === 1
                ? "board-level2 click-through"
                : "board-level3 click-through"
            }
          >
            {tileLevel.map((tileRow, rowIndex) => {
              return (
                <div key={uuidv4()}>
                  {tileRow.map((tile, columnIndex) => {
                    return (
                      <Tile
                        key={uuidv4()}
                        tile={tile}
                        onClick={() => {
                          getTileSelected(rowIndex, columnIndex, layoutIndex);
                        }}
                        className={tile ? "tile" : "tile-null"}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;

// className={
//   tile
//     ? layoutIndex === 0
//       ? "tile"
//       : layoutIndex === 1
//       ? "tile tileLevel2-position"
//       : "tile tileLevel3-position"
//     : "tile-null"
// }
