import React, { useState } from "react";
import GamePageNavBar from "./GamePageNavBar";
import Game from "./Game";
import "../../style.css";
import Footer from "../Footer";

const GameApp = ({ boardLayout }) => {
  const [tileLayout, setTileLayout] = useState(boardLayout);
  const [bottomHolder, setBottomHolder] = useState([]);

  const resetGame = () => {
    setTileLayout(boardLayout);
    setBottomHolder([]);
  };

  return (
    <div className="gameapp-container">
      <div>
        <GamePageNavBar resetGame={resetGame} />
      </div>
      <div>
        <Game
          boardLayout={boardLayout}
          tileLayout={tileLayout}
          setTileLayout={setTileLayout}
          bottomHolder={bottomHolder}
          setBottomHolder={setBottomHolder}
          resetGame={resetGame}
        />
      </div>
      <Footer />
    </div>
  );
};

export default GameApp;
