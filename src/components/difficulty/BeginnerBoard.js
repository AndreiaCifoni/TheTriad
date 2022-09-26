import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  beginnerLevelsLayout,
} from "../../util/tiles/beginnerTiles";
import {
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight,
  removeTile,
  isTileFree,
} from "../../util/tileLevelFunctions";
import "../../style.css";

const BeginnerBoard = () => {
  const onTileClick = (index1, index2, index3) => {
    const z = index1;
    const x = index2;
    const y = index3;
    const tileLevel = beginnerLevelsLayout[z];

    ////tileUpperLevel is returning "undefined" instead of "null" when > than (length -1)... I tried a if condition:
    // const tileUpperLevel = (z, beginnerLevelsLayout) => {
    //   if (beginnerLevelsLayout[z + 1] > beginnerLevelsLayout.length - 1) {
    //     return null;
    //   }
    //   return beginnerLevelsLayout[z + 1];
    // };
    // console.log(tileUpperLevel(z, beginnerLevelsLayout));

    const tileUpperLevel = beginnerLevelsLayout[z + 1];

    ////the function "getEvenLevelTileBottomRight" is here just to test. It will be refactored to fit EVEN and ODD levels
    // const getEvenLevelTileBottomRight = (
    //   x,
    //   y,
    //   tileUpperLevel,
    //   beginnerLevelsLayout
    // ) => {
    //   if (tileUpperLevel > beginnerLevelsLayout.length - 1) {
    //     return null;
    //   }
    //   return tileUpperLevel[x][y];
    // };
    // console.log(
    //   getEvenLevelTileBottomRight(x, y, tileUpperLevel, beginnerLevelsLayout)
    // );
    isTileFree(x, y, z, tileUpperLevel);
    removeTile(x, y, tileLevel);
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
