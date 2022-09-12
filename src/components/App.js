import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Beginner from "./level/Beginner";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/beginner"} element={<Beginner />} />
      </Routes>
    </div>
  );
};

export default App;
