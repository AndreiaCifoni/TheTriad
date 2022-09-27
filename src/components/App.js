import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Board from "./difficulty/Board";
import TestCode from "./TestCode";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/board"} element={<Board />} />
        <Route path={"/test"} element={<TestCode />} />
      </Routes>
    </div>
  );
};

export default App;
