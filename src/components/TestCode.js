import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "../util/tiles/beginnerTiles";

const TestCode = () => {
  const abc = [
    { title: "orange", id: 1 },
    { title: "orange", id: 2 },
    { title: "orange", id: 3 },
    { title: "abacaxi", id: 4 },
    { title: "morango", id: 5 },
    { title: "pera", id: 6 },
    { title: "morango", id: 7 },
    { title: "abacaxi", id: 8 },
  ];

  const removeGroup = (abc) => {
    let i = 0;
    while (i < abc.length - 2) {
      if (abc[i].title === abc[i + 2].title) {
        abc.splice(i, 1);
      } else {
        ++i;
      }
    }
  };

  console.log(removeGroup(abc));

  return <div>Im test</div>;
};

export default TestCode;

// className={
//   tileLevel === tileLevel1
//     ? "tile"
//     : tileLevel === tileLevel2
//     ? "tile tileLevel2-position"
//     : "tile tileLevel3-position"
// }
