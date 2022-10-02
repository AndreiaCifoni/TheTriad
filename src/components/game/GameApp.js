import React from "react";
import GamePageNavBar from "./GamePageNavBar";
import Game from "./Game";

const GameApp = () => {
  return (
    <div>
      <div>
        <GamePageNavBar />
      </div>
      <div>
        <Game />
      </div>
    </div>
  );
};

export default GameApp;
