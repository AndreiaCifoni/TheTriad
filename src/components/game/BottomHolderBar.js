import React from "react";
import Tile from "../../util/tiles/Tile";

const BottomHolderBar = ({ bottomHolder }) => {
  return (
    <div>
      <div className="bottomHolderBar-container">
        {bottomHolder.map((tile) => {
          return <Tile tile={tile} />;
        })}
      </div>
    </div>
  );
};

export default BottomHolderBar;
