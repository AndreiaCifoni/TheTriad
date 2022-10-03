import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gamePageNavBar } from "../../util/gamePageNavBar";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const GamePageNavBar = () => {
  // const [gameNavClicked, setGameNavClicked] = useState(false);

  // const onClickGameNav = () => {
  //   setGameNavClicked(!gameNavClicked);
  // };

  // const onGameNavIcon = () => {
  //   setGameNavClicked(!gameNavClicked);
  // };

  return (
    <nav className="gamePageNav-container">
      <h1 className="gamePageNav-title">Match 3</h1>
      {/* <i onClick={onGameNavIcon}>
        {gameNavClicked ? (
          <XIcon className="nav-icon-icon" />
        ) : (
          <MenuIcon className="nav-icon-icon" />
        )}
      </i> */}
      <ul className="gamePageNav-list">
        {gamePageNavBar.map((nav) => {
          return (
            <li>
              <Link
                //onClick={onClickGameNav}
                className="gamePageNav-item"
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
