import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div>
        <Link to={"/gameapp"}>Begginer</Link>
      </div>
      <div>
        <Link to={"/gameapp"}>Intermeydiate</Link>
      </div>
      <div>
        <Link to={"/gameapp"}>Expert</Link>
      </div>
    </div>
  );
};

export default Home;
