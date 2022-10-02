import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "../util/tiles/beginnerTiles";
// const tileUpperLevel = () => {
//   if (boardLayout[z + 1] > boardLayout.length - 1) {
//     return null;
//   }
//   return boardLayout[z + 1];
// };
const TestCode = () => {
  return <div>I am TEST</div>;
};

export default TestCode;

// <img
//                     onClick={() =>
//                       onTileClick(layoutIndex, rowIndex, columnIndex)
//                     }
//                     className={
//                       tilelevel === tileLevel1
//                         ? "tile-img"
//                         : tilelevel === tileLevel2
//                         ? "tile-img tileLevel2Position"
//                         : "tile-img tileLevel3Position"
//                     }
//                     src={tile?.url}
//                     alt={tile?.title}
//                   />
