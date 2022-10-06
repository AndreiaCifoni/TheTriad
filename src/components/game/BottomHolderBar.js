import React from "react";
import Tile from "../../util/tiles/Tile";

const BottomHolderBar = ({ bottomHolder }) => {
  // const tilesInOrder = bottomHolder.sort();
  // console.log(tilesInOrder);

  return (
    <div>
      <div className="bottomHolderBar-container">
        {bottomHolder
          .sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            return 1;
          })
          .map((tile) => {
            return <Tile tile={tile} />;
          })}
      </div>
    </div>
  );
};

export default BottomHolderBar;
