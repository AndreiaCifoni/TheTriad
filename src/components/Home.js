import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">The Triad</h1>
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
      <Footer />
    </div>
  );
};

export default Home;
