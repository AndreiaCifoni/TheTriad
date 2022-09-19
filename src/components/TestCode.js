import React, { useState } from "react";
import "../style.css";

const TestCode = () => {
  const tile1 = {
    title: "orange",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
    id: 1,
  };

  const tile2 = {
    title: "kiwi",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
    id: 2,
  };

  const tile3 = {
    title: "strawberry",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
    id: 3,
  };

  const tile4 = {
    title: "orange",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
    id: 4,
  };

  const tile5 = {
    title: "kiwi",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
    id: 5,
  };

  const tile6 = {
    title: "strawberry",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
    id: 6,
  };

  const tile7 = {
    title: "orange",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
    id: 7,
  };

  const tile8 = {
    title: "kiwi",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
    id: 8,
  };

  const tile9 = {
    title: "strawberry",
    url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
    id: 9,
  };

  const tileLevel1 = [
    [tile1, tile2, tile3],
    [tile5, tile6, tile4],
    [tile9, tile7, tile8],
  ];

  const tileLevel2 = [
    [null, null, tile2],
    [null, null, tile3],
    [tile9, tile8, tile7],
  ];

  // const tileLevel3 = [
  //   [tile5, tile6, tile4],
  //   [tile9, tile7, tile8],
  //   [tile1, tile2, tile3],
  // ];

  // const boardGame = [tileLevel1, tileLevel2, tileLevel3];

  //selected will pass the value to bottom
  const [selected, setSelected] = useState(null);
  //const [deleteTile, setDeleteTile] = useState([]);

  const onLevel1Click = (index2, index1) => {
    const y = tileLevel1.indexOf(index1);
    const x = index2;
    overlappingTiles1(x, y);
    setSelected(tileLevel1[y][x]);
    //should I use setDeleteTile in a useEffect?...in delete > set tile to null and change its class so I can use visibility: hidden
    //setDeleteTile((tileLevel1[y][x] = null));
  };

  //**** I have to change logic so index of lapping tiles of the borders don't be negative
  const overlappingTiles1 = (x, y) => {
    // const getTileTopLeft = () => {
    //   if((x-1) === null || (y-1) === null){
    //     return null
    //   }
    //   return tileLevel2[x-1][y-1]
    // }
    const tileTopLeft = tileLevel2[x - 1][y - 1];
    const tileTopRight = tileLevel2[x - 1][y];
    const tileBottomLeft = tileLevel2[x][y - 1];
    const tileBottomRight = tileLevel2[x][y];
    isTileFree(tileTopLeft, tileTopRight, tileBottomLeft, tileBottomRight);
    return console.log([
      tileTopLeft,
      tileTopRight,
      tileBottomLeft,
      tileBottomRight,
    ]);
  };

  const isTileFree = (
    tileTopLeft,
    tileTopRight,
    tileBottomLeft,
    tileBottomRight
  ) => {
    if (
      tileTopLeft === null &&
      tileTopRight === null &&
      tileBottomLeft === null &&
      tileBottomRight === null
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className="level1">
        {tileLevel1.map((tiles, index1) => {
          return (
            <div>
              {tiles.map((tile, index2, index1) => {
                return (
                  <img
                    onClick={() => onLevel1Click(index2, index1)}
                    className="tile-img"
                    src={tile?.url}
                    alt={tile?.title}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="level2">
        {tileLevel2.map((tiles) => {
          return (
            <div>
              {tiles.map((tile) => {
                return (
                  <img className="tile-img" src={tile?.url} alt={tile?.title} />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestCode;

//get the tile clicled - DONE
//get the ones touching - DONE
//is free? - DONE
//save the value of clicked to pass to bottom holder - DONE
//when clicked transform in null on the tileLevel
