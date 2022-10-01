import React from "react";
import { Link } from "react-router-dom";
import { gamePageNavBar } from "../../util/gamePageNavBar";

const GamePageNavBar = () => {
  const onClickGameNav = () => {};

  return (
    <nav className="nav-container">
      <h1>Match 3</h1>
      <ul>
        {gamePageNavBar.map((nav) => {
          return (
            <li>
              <Link
                onClick={onClickGameNav}
                className="game-nav-item"
                to={nav.path}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GamePageNavBar;

//<Link to={"/board"}>Restart</Link>
//<Link to={"/"}>Home</Link>
