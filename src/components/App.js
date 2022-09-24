import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BeginnerBoard from "./difficulty/BeginnerBoard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/beginner"} element={<BeginnerBoard />} />
      </Routes>
    </div>
  );
};

export default App;
