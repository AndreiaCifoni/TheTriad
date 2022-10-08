import React, { useState, useRef } from "react";
import Tile from "../../util/tiles/Tile";
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
  getTileSelected,
} from "../../util/tileLevelFunctions";
import "../../style.css";

const Board = ({ getTileSelected, tileLayout }) => {
  return (
    <div>
      {tileLayout.map((tileLevel, layoutIndex) => {
        return tileLevel.map((tileRow, rowIndex) => {
          return (
            <div>
              {tileRow.map((tile, columnIndex) => {
                return (
                  <Tile
                    tile={tile}
                    tileLevel={tileLevel}
                    onClick={() => {
                      getTileSelected(rowIndex, columnIndex, layoutIndex);
                    }}
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
