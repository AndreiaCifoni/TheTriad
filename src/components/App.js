import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BeginnerBoard from "./difficulty/BeginnerBoard";
import TestCode from "./TestCode";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/beginner"} element={<BeginnerBoard />} />
        <Route path={"/test"} element={<TestCode />} />
      </Routes>
    </div>
  );
};

export default App;
