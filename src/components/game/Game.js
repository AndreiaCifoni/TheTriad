import React from "react";
import Board from "../difficulty/Board";
import BottomHolderBar from "./BottomHolderBar";
import {
  getIsTileFree,
  getTileUpperLevel,
} from "../../util/tileLevelFunctions";
import {
  removeGroupBottomHolder,
  isGameOver,
  isWinner,
} from "../../util/bottomHolderFunctions";
import WinLoseCard from "./WinLoseCard";

const Game = ({
  boardLayout,
  tileLayout,
  setTileLayout,
  bottomHolder,
  setBottomHolder,
}) => {
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

  return (
    <div className="game-container">
      {isGameOver(bottomHolder) ? (
        <WinLoseCard
          title={"Game Over"}
          className={"card-container card-gameover"}
        />
      ) : isWinner(tileLayout, bottomHolder) ? (
        <WinLoseCard
          title={"Winner"}
          className={"card-container card-winner"}
        />
      ) : (
        <div>
          <div>
            <Board getTileSelected={getTileSelected} tileLayout={tileLayout} />
          </div>
          <div>
            <BottomHolderBar bottomHolder={bottomHolder} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
