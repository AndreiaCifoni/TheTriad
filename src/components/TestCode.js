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
    [tile1, tile5, tile2],
    [tile4, tile6, tile3],
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
    const x = tileLevel1.indexOf(index1);
    const y = index2;

    setSelected(tileLevel1[x][y]);
    //should I use setDeleteTile in a useEffect?...in delete > set tile to null and change its class so I can use visibility: hidden
    //setDeleteTile((tileLevel1[y][x] = null));
  };

  //logic of "getTile..." only works if we click on a bottom level to check for the top level if tile is blocked (BOTTOM >> TOP)...
  //the other way( top>>bottom) will NOT work, since the coordinates of top are +1 and not -1
  const getTileTopLeft = (x, y, tileUpperLevel) => {
    if (x - 1 < 0 || y - 1 < 0) {
      return null;
    } else if (
      x - 1 > tileUpperLevel.length - 1 ||
      y - 1 > tileUpperLevel[0].length - 1
    ) {
      return null;
    }
    return tileUpperLevel[x - 1][y - 1];
  };

  const getTileTopRight = (x, y, tileUpperLevel) => {
    if (x - 1 < 0) {
      return null;
    } else if (x - 1 > tileUpperLevel.length - 1) {
      return null;
    }
    return tileUpperLevel[x - 1][y];
  };

  const getTileBottomLeft = (x, y, tileUpperLevel) => {
    if (y - 1 < 0) {
      return null;
    } else if (y - 1 > tileUpperLevel[0].length - 1) {
      return null;
    }
    return tileUpperLevel[x][y - 1];
  };

  const getTileBottomRight = (x, y, tileUpperLevel) => {
    return tileUpperLevel[x][y];
  };

  console.log(getTileBottomLeft(2, 2, tileLevel2));

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
