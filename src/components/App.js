import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Board from "./difficulty/Board";
import TestCode from "./TestCode";
import GameApp from "./game/GameApp";
import WinLoseCard from "./game/WinLoseCard";
import { boardLayout } from "../util/tiles/beginnerTiles";
import { boardLayoutBeginner2 } from "../util/tiles/tilesLayout/tileLayoutBeginner2";
import { boardLayoutIntermediate1 } from "../util/tiles/tilesLayout/tileLayoutIntermediate1";
import { boardLayoutExpert1 } from "../util/tiles/tilesLayout/tileLayoutExpert1";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path={"/board"} element={<Board />} />
        <Route path={"/test"} element={<TestCode />} />
        <Route
          path={"/game-test"}
          element={<GameApp boardLayout={boardLayout} />}
        />
        <Route
          path={"/game-beginner"}
          element={<GameApp boardLayout={boardLayoutBeginner2} />}
        />
        <Route
          path={"/game-intermediate"}
          element={<GameApp boardLayout={boardLayoutIntermediate1} />}
        />
        <Route
          path={"/game-expert"}
          element={<GameApp boardLayout={boardLayoutExpert1} />}
        />
        <Route path={"/winlose"} element={<WinLoseCard />} />
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
