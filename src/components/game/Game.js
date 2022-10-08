import React, { useState, useEffect } from "react";
import Board from "../difficulty/Board";
import BottomHolderBar from "./BottomHolderBar";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "../../util/tiles/beginnerTiles";
import {
  getIsTileFree,
  getTileUpperLevel,
  getTileTopLeft,
} from "../../util/tileLevelFunctions";
import { removeGroupBottomHolder } from "../../util/bottomHolderFunctions";

const Game = () => {
  const [tileLayout, setTileLayout] = useState(boardLayout);
  const [bottomHolder, setBottomHolder] = useState([]);

  // useEffect(() => {
  //   console.log(bottomHolder, updateTileLayout);
  // }, [bottomHolder, updateTileLayout]);

  const getTileSelected = (x, y, z) => {
    const tileUpperLevel = getTileUpperLevel(z, tileLayout);
    const isTileFree = getIsTileFree(x, y, z, tileUpperLevel);

    console.log(getTileTopLeft(x, y, z, tileUpperLevel));
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
