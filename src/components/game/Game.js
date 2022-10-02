import React from "react";
import Board from "../difficulty/Board";
import BottomHolderBar from "./BottomHolderBar";

const Game = () => {
  return (
    <div>
      <div>
        <Board />
      </div>
      <BottomHolderBar />
    </div>
  );
};

export default Game;
