import React from "react";
import { Link } from "react-router-dom";

const WinLoseCard = () => {
  return (
    <div>
      <h1>Winner!</h1>
      <div>
        <Link to={"/gameapp"}>Play Again</Link>

        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default WinLoseCard;
