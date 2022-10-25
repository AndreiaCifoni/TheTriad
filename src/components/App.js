import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Board from "./game/Board";
import TestCode from "./TestCode";
import GameApp from "./game/GameApp";
import WinLoseCard from "./game/WinLoseCard";
import { boardLayout } from "../util/tiles/beginnerTiles";
import { boardLayoutBeginner1 } from "../util/tiles/tilesLayout/tileLayoutBeginner1";
import { boardLayoutBeginner2 } from "../util/tiles/tilesLayout/tileLayoutBeginner2";
import { boardLayoutBeginner3 } from "../util/tiles/tilesLayout/tileLayoutBeginner3";
import { boardLayoutIntermediate1 } from "../util/tiles/tilesLayout/tileLayoutIntermediate1";
import { boardLayoutIntermediate2 } from "../util/tiles/tilesLayout/tileLayoutIntermediate2";
import { boardLayoutIntermediate3 } from "../util/tiles/tilesLayout/tileLayoutIntermediate3";
import { boardLayoutExpert1 } from "../util/tiles/tilesLayout/tileLayoutExpert1";
import { boardLayoutExpert2 } from "../util/tiles/tilesLayout/tileLayoutExpert2";
import { boardLayoutExpert3 } from "../util/tiles/tilesLayout/tileLayoutExpert3";
import Rules from "./Rules";

const App = () => {
  const beginnerBoards = [
    boardLayoutBeginner1,
    boardLayoutBeginner2,
    boardLayoutBeginner3,
  ];

  const intermediateBoards = [
    boardLayoutIntermediate1,
    boardLayoutIntermediate2,
    boardLayoutIntermediate3,
  ];

  const expertBoards = [
    boardLayoutExpert1,
    boardLayoutExpert2,
    boardLayoutExpert3,
  ];

  const newBoard = Math.floor(Math.random() * 3);

  return (
    <div className="app-container">
      <Routes>
        <Route path={"/board"} element={<Board />} />
        <Route path={"/test"} element={<TestCode />} />
        <Route path={"/rules"} element={<Rules />} />
        <Route
          path={"/game-test"}
          element={<GameApp boardLayout={boardLayout} />}
        />
        <Route
          path={"/game-beginner"}
          element={<GameApp boardLayout={beginnerBoards[newBoard]} />}
        />

        <Route
          path={"/game-intermediate"}
          element={<GameApp boardLayout={intermediateBoards[newBoard]} />}
        />

        <Route
          path={"/game-expert"}
          element={<GameApp boardLayout={expertBoards[newBoard]} />}
        />

        <Route path={"/winlose"} element={<WinLoseCard />} />
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
