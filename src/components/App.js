import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Board from "./difficulty/Board";
import TestCode from "./TestCode";
import GameApp from "./game/GameApp";
import WinLoseCard from "./game/WinLoseCard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/board"} element={<Board />} />
        <Route path={"/test"} element={<TestCode />} />
        <Route path={"/gameapp"} element={<GameApp />} />
        <Route path={"/winlose"} element={<WinLoseCard />} />
      </Routes>
    </div>
  );
};

export default App;
