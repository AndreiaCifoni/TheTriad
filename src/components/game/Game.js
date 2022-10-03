import React, { useState } from "react";
import Board from "../difficulty/Board";
import BottomHolderBar from "./BottomHolderBar";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
} from "../../util/tileLevelFunctions";

const Game = () => {
  // const [getLevelUpdated, setGetLevelUpdated] = useState([tileLevel1, tileLevel2, tileLevel3]);
  const [bottomHolder, setBottomHolder] = useState([]);

  const getTileSelected = (isTileFree, tileLevel, x, y) => {
    if (isTileFree) {
      tileHolder(tileLevel, x, y);
    }
  };

  // const levelUpdated = () => {
  // something that map through getLevelUpdated
  // and if tile === selectedTile, so spread and transform this tile to null
  // pass this "getLevelUpdated" to board to be mapped in the return
  //}

  const tileHolder = (tileLevel, x, y) => {
    setBottomHolder([bottomHolder.push(tileLevel[x][y])]);
  };
  console.log(bottomHolder);
  return (
    <div>
      <div>
        <Board getTileSelected={getTileSelected} />
      </div>
      <div>
        <BottomHolderBar />
      </div>
    </div>
  );
};

export default Game;
