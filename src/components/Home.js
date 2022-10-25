import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Rules from "./Rules";

const Home = () => {
  return (
    <div className="home-container">
      {/* <button className="home-btn">Rules</button>
      <div className="home-rules">
        <Rules />
      </div> */}
      <h1 className="home-title">The Triad</h1>

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
      <Footer />
    </div>
  );
};

export default Home;
