import React from "react";
import Tile from "../util/tiles/Tile";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/board"}>Board</Link>
      <div>
        <Link to={"/test"}>TEST</Link>
      </div>
      <div>
        <Link to={"/gameapp"}>Game App</Link>
      </div>
      <div>
        <Tile />
      </div>
    </div>
  );
};

export default Home;
