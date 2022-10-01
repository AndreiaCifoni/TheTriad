import React from "react";

const Tile = () => {
  const onClickTile = () => {
    console.log("I am Tile");
  };

  return (
    <img
      onClick={onClickTile}
      className="tile-img"
      src="https://res.cloudinary.com/deiacifoni/image/upload/v1662843921/fruits/fruit4_xlmd3h.jpg"
      alt="cherry"
    />
  );
};

export default Tile;
