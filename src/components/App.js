import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Board from "./difficulty/Board";
import TestCode from "./TestCode";
import GameApp from "./game/GameApp";
import WinLoseCard from "./game/WinLoseCard";
import { boardLayout } from "../util/tiles/beginnerTiles";
import { boardLayout1 } from "../util/tiles/tilesLayout/tileLayout1";
import { boardLayout2 } from "../util/tiles/tilesLayout/tileLayout2";
import { boardLayout3 } from "../util/tiles/tilesLayout/tileLayout3";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/board"} element={<Board />} />
        <Route path={"/test"} element={<TestCode />} />
        <Route
          path={"/game-test"}
          element={<GameApp boardLayout={boardLayout} />}
        />
        <Route
          path={"/game-begginer"}
          element={<GameApp boardLayout={boardLayout1} />}
        />
        <Route
          path={"/game-intermediate"}
          element={<GameApp boardLayout={boardLayout2} />}
        />
        <Route
          path={"/game-expert"}
          element={<GameApp boardLayout={boardLayout3} />}
        />
        <Route path={"/winlose"} element={<WinLoseCard />} />
      </Routes>
    </div>
  );
};

export default App;
