import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const WinLoseCard = ({ title, className }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={className}>
      <h1 className="card-title">{title}</h1>
      <div>
        <button className="card-btn" onClick={refreshPage}>
          Play again
        </button>

        <Link className="card-btn" to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default WinLoseCard;
