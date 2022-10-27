import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import {
  XIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import Rules from "../Rules";

const GamePageNavBar = ({ resetGame }) => {
  const [gameNavClicked, setGameNavClicked] = useState(false);
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const onGameNavIcon = () => {
    setGameNavClicked(!gameNavClicked);
  };

  return (
    <nav className="gamePageNav-container">
      <h1 className="gamePageNav-title">The Triad</h1>
      <button
        className={toggle ? "gamePageNav-rules-icon" : "gamePageNav-item"}
        onClick={onToggle}
      >
        {toggle ? <QuestionMarkCircleIcon className="home-icon" /> : "Rules"}
      </button>
      <div className={toggle ? " rules-container" : "rules-none"}>
        <Rules />
      </div>
      <div className="gamePageNav-menu-container">
        <div className="gamePageNav-icon-container">
          <i onClick={onGameNavIcon}>
            {gameNavClicked ? (
              <XIcon className="gamePageNav-icon" />
            ) : (
              <MenuIcon className="gamePageNav-icon" />
            )}
          </i>
        </div>

        <div
          className={
            gameNavClicked
              ? "gamePageNav-items gamePageNav-items-cell"
              : "gamePageNav-items"
          }
        >
          <button className="gamePageNav-item" onClick={refreshPage}>
            New Board
          </button>
          <button className="gamePageNav-item" onClick={resetGame}>
            Restart
          </button>
          <Link className="gamePageNav-item" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GamePageNavBar;
