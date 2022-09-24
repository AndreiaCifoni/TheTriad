import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  begginerLevelsLayout,
} from "../../util/tiles/beginnerTiles";
import "../../style.css";

const BeginnerBoard = () => {
  return (
    <div className="level1">
      {begginerLevelsLayout.map((tilelevel) => {
        return tilelevel.map((tileRow, index1) => {
          return (
            <div>
              {tileRow.map((tile, index2, index1) => {
                return (
                  <img
                    //onClick={() => onLevel1Click(index2, index1)}
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
