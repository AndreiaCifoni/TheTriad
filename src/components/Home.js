import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Match Tiles</h1>
      {/* <div className="home-btn-container">
        <Link to={"/game-test"}>Beginner</Link>
      </div> */}
      <div className="home-btn-container">
        <div className="home-btn-box">
          <Link to={"/game-beginner"}>Beginner</Link>
        </div>
        <div className="home-btn-box">
          <Link to={"/game-intermediate"}>Intermediate</Link>
        </div>
        <div className="home-btn-box">
          <Link to={"/game-expert"}>Expert</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
