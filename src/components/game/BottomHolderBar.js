import React from "react";
import Tile from "../../util/tiles/Tile";

const BottomHolderBar = ({ bottomHolder }) => {
  const bottomHolderSorted = bottomHolder.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });

  const removeGroup = (bottomHolderSorted) => {
    let i = 0;
    while (i < bottomHolderSorted.length) {
      if (bottomHolderSorted[i].title === bottomHolderSorted[i + 2].title) {
        bottomHolderSorted.splice(i, 3);
      } else {
        ++i;
      }
    }
  };

  console.log(removeGroup(bottomHolderSorted));

  return (
    <div>
      <div className="bottomHolderBar-container">
        {bottomHolderSorted.map((tile) => {
          return <Tile tile={tile} />;
        })}
      </div>
    </div>
  );
};

export default BottomHolderBar;
