import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const WinLoseCard = () => {
  return (
    <div className="card-container card-gameover">
      <h1 className="card-title">Game Over</h1>
      <div>
        <Link className="card-btn" to={"/gameapp"}>
          Play Again
        </Link>

        <Link className="card-btn" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default WinLoseCard;
