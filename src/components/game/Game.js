import React from "react";
import Board from "../difficulty/Board";
import BottomHolderBar from "./BottomHolderBar";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
} from "../../util/tileLevelFunctions";

const Game = () => {
  // const [getLevelUpdated, setGetLevelUpdated] = useState([tileLevel1, tileLevel2, tileLevel3]);
  // const [bottomHolder, setBottomHolder] = useState([]);

  // const levelUpdated = () => {
  // something that map through getLevelUpdated
  // and if tile === selectedTile, so spread and transform this tile to null
  // pass this "getLevelUpdated" to board to be mapped in the return
  //}

  //const tileHolded = () => {
  // it will take the bottomHolder and add the selectedTile,
  // this will be passed to the component to be added in the return
  //}

  const getTileSelected = (isTileFree, tileLevel, x, y) => {
    if (isTileFree) {
      console.log("coming from child", tileLevel[x][y]);
      return tileLevel[x][y];
    }
  };

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
