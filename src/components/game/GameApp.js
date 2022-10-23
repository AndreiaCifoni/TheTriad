import React from "react";
import GamePageNavBar from "./GamePageNavBar";
import Game from "./Game";
import "../../style.css";
import Footer from "../Footer";

const GameApp = ({ boardLayout }) => {
  return (
    <div className="gameapp-container">
      <div>
        <GamePageNavBar />
      </div>
      <div>
        <Game boardLayout={boardLayout} />
      </div>
      <Footer />
    </div>
  );
};

export default GameApp;
