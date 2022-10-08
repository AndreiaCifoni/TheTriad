import React, { useState } from "react";
import Board from "../difficulty/Board";
import BottomHolderBar from "./BottomHolderBar";
import { boardLayout } from "../../util/tiles/beginnerTiles";
import {
  getIsTileFree,
  getTileUpperLevel,
} from "../../util/tileLevelFunctions";
import {
  removeGroupBottomHolder,
  isGameOver,
} from "../../util/bottomHolderFunctions";

const Game = () => {
  const [tileLayout, setTileLayout] = useState(boardLayout);
  const [bottomHolder, setBottomHolder] = useState([]);

  const getTileSelected = (x, y, z) => {
    const tileUpperLevel = getTileUpperLevel(z, tileLayout);
    const isTileFree = getIsTileFree(x, y, z, tileUpperLevel);

    if (isTileFree) {
      setBottomHolder((oldBottomHolder) => {
        const sortedBottomHolder = [
          ...oldBottomHolder,
          boardLayout[z][x][y],
        ].sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          return 1;
        });

        return removeGroupBottomHolder(sortedBottomHolder);
      });

      setTileLayout((oldLayout) => {
        return oldLayout.map((level) => {
          return level.map((row) => {
            return row.map((tile) => {
              if (tile === boardLayout[z][x][y]) {
                return null;
              }
              return tile;
            });
          });
        });
      });
    }
  };
  isGameOver(bottomHolder);
  return (
    <div>
      <div>
        <Board getTileSelected={getTileSelected} tileLayout={tileLayout} />
      </div>
      <div>
        <BottomHolderBar bottomHolder={bottomHolder} />
      </div>
    </div>
  );
};

export default Game;
