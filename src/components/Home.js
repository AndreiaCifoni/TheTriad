import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/board"}>Board</Link>
      <div>
        <Link to={"/test"}>TEST</Link>
      </div>
    </div>
  );
};

export default Home;
