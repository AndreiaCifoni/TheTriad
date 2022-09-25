import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  beginnerLevelsLayout,
} from "../util/tiles/beginnerTiles";
// const tileUpperLevel = () => {
//   if (beginnerLevelsLayout[z + 1] > beginnerLevelsLayout.length - 1) {
//     return null;
//   }
//   return beginnerLevelsLayout[z + 1];
// };
const TestCode = () => {
  return <div>I am TEST</div>;
};

export default TestCode;

// //-----------------for EVEN Tile Upper Level (Odd index of beginnerLevelsLayout) -----------------
// const getEvenLevelTileTopLeft = (x, y, tileUpperLevel) => {
//   if (x - 1 < 0 || y - 1 < 0) {
//     return null;
//   } else if (
//     x - 1 > tileUpperLevel.length - 1 ||
//     y - 1 > tileUpperLevel[0].length - 1
//   ) {
//     return null;
//   }
//   return tileUpperLevel[x - 1][y - 1];
// };

// const getEvenLevelTileTopRight = (x, y, tileUpperLevel) => {
//   if (x - 1 < 0) {
//     return null;
//   } else if (x - 1 > tileUpperLevel.length - 1) {
//     return null;
//   }
//   return tileUpperLevel[x - 1][y];
// };

// const getEvenLevelTileBottomLeft = (x, y, tileUpperLevel) => {
//   if (y - 1 < 0) {
//     return null;
//   } else if (y - 1 > tileUpperLevel[0].length - 1) {
//     return null;
//   }
//   return tileUpperLevel[x][y - 1];
// };

// const getEvenLevelTileBottomRight = (x, y, tileUpperLevel) => {
//   return tileUpperLevel[x][y];
// };

// //-----------------for ODD Tile Upper Level (Even index of beginnerLevelsLayout) -----------------

// const getOddLevelTileTopLeft = (x, y, tileUpperLevel) => {
//   return tileUpperLevel[x][y];
// };

// const getOddLevelTileTopRight = (x, y, tileUpperLevel) => {
//   if (y + 1 > tileUpperLevel[0].length - 1) {
//     return null;
//   }
//   return tileUpperLevel[x][y + 1];
// };

// const getOddLevelTileBottomLeft = (x, y, tileUpperLevel) => {
//   if (x + 1 > tileUpperLevel.length - 1) {
//     return null;
//   }
//   return tileUpperLevel[x + 1][y];
// };

// const getOddLevelTileBottomRight = (x, y, tileUpperLevel) => {
//   if (
//     x + 1 > tileUpperLevel.length - 1 ||
//     y + 1 > tileUpperLevel[0].length - 1
//   ) {
//     return null;
//   }
//   return tileUpperLevel[x + 1][y + 1];
// };
