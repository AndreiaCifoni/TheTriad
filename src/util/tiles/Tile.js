import React from "react";
import "../../style.css";

const Tile = ({ tile, onClick, className }) => {
  return (
    <img
      onClick={onClick || null}
      className={className}
      src={tile?.url}
      alt={tile?.title}
    />
  );
};

export default Tile;
