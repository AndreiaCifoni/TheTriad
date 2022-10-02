import React from "react";

const Tile = ({ url, title, id, layoutIndex, rowIndex, columnIndex }) => {
  const onClickTile = () => {
    console.log("I am Tile");
    //selectTile()
  };

  return (
    <img onClick={onClickTile} className="tile-img" src={url} alt={title} />
  );
};

export default Tile;
