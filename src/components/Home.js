import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Rules from "./Rules";
import { XIcon } from "@heroicons/react/solid";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="home-container">
      <button
        className={toggle ? "home-rules-icon" : "home-rules-btn"}
        onClick={onToggle}
      >
        {toggle ? <XIcon className="home-icon" /> : "Rules"}
      </button>
      <div className={toggle ? " rules-container" : "rules-none"}>
        <Rules />
      </div>
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
