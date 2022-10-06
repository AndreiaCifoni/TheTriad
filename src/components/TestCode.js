import React from "react";
import {
  tileLevel1,
  tileLevel2,
  tileLevel3,
  boardLayout,
} from "../util/tiles/beginnerTiles";

const TestCode = () => {
  const abc = [
    { title: "strawbery", numero: 1 },
    { title: "orange", numero: 2 },
    { title: "kiwi", numero: 3 },
    { title: "strawbery", numero: 1 },
    { title: "orange", numero: 2 },
    { title: "kiwi", numero: 3 },
    { title: "strawbery", numero: 1 },
    { title: "orange", numero: 2 },
    { title: "kiwi", numero: 3 },
  ];

  const abcde = abc.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });

  console.log(abcde);

  return <div>{abcde}</div>;
};

export default TestCode;

// className={
//   tileLevel === tileLevel1
//     ? "tile"
//     : tileLevel === tileLevel2
//     ? "tile tileLevel2-position"
//     : "tile tileLevel3-position"
// }
