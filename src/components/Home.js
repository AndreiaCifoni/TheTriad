import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div>
        <Link to={"/test"}>TEST</Link>
      </div>
      <div>
        <Link to={"/gameapp"}>Game App</Link>
      </div>
      <div>
        <Link to={"/winlose"}>Win Lose Card</Link>
      </div>
    </div>
  );
};

export default Home;
