import React from "react";

const Tile = ({ url, title, layoutIndex, rowIndex, columnIndex }) => {
  const onClickTile = () => {
    console.log("I am Tile");
  };

  return (
    <img onClick={onClickTile} className="tile-img" src={url} alt={title} />
  );
};

export default Tile;
