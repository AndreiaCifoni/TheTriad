import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  beginnerLevelsLayout,
} from "../../util/tiles/beginnerTiles";
import "../../style.css";

const BeginnerBoard = () => {
  const onTileClick = (index1, index2, index3) => {
    const z = index1;
    const x = index2;
    const y = index3;
    ////tileUpperLevel is returning undefined when > than (length -1)... I tried a if condition:
    // const tileUpperLevel = () => {
    //   if(beginnerLevelsLayout[z + 1] > beginnerLevelsLayout.length-1){
    //     return null
    //   }
    //   return beginnerLevelsLayout[z + 1]
    // }
    const tileUpperLevel = beginnerLevelsLayout[z + 1];

    ////if I try to introduce this functions that find the corners, it get "undefined"...
    ////while if I do a console.log(tileUpperLevel[x][y]) I got the result
    // const getEvenLevelTileBottomRight = (x, y, tileUpperLevel) => {
    //   return tileUpperLevel[x][y];
    // };
    // console.log(getEvenLevelTileBottomRight());
  };

  return (
    <div>
      {beginnerLevelsLayout.map((tilelevel, index1) => {
        return tilelevel.map((tileRow, index2) => {
          return (
            <div>
              {tileRow.map((tile, index3) => {
                return (
                  <img
                    onClick={() => onTileClick(index1, index2, index3)}
                    className={
                      tilelevel === tileLevel1
                        ? "tile-img"
                        : tilelevel === tileLevel2
                        ? "tile-img tileLevel2Position"
                        : "tile-img tileLevel3Position"
                    }
                    src={tile?.url}
                    alt={tile?.title}
                  />
                );
              })}
            </div>
          );
        });
      })}
    </div>
  );
};

export default BeginnerBoard;
