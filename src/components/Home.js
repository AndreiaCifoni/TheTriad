import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div>
        <Link to={"/game-test"}>Begginer</Link>
      </div>
      <div>
        <Link to={"/game-begginer"}>Begginer</Link>
      </div>
      <div>
        <Link to={"/game-intermediate"}>Intermeydiate</Link>
      </div>
      <div>
        <Link to={"/game-expert"}>Expert</Link>
      </div>
    </div>
  );
};

export default Home;
