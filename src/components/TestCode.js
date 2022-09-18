import React from "react";
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
    [tile3, tile1, tile2],
    [tile1, tile2, tile3],
    [tile2, tile3, tile1],
  ];

  const onLevel1Click = (index, x) => {
    const y = tileLevel1.indexOf(x);
    console.log(y);
    console.log(index);
  };

  return (
    <div>
      <div className="level1">
        {tileLevel1.map((tiles, x) => {
          return (
            <div>
              {tiles.map((tile, index, x) => {
                return (
                  <img
                    onClick={() => onLevel1Click(index, x)}
                    className="tile-img"
                    src={tile.url}
                    alt={tile.title}
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
                  <img className="tile-img" src={tile.url} alt={tile.title} />
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

//get the tile clicled
//get the ones touching
//is free?
//when clicked transform in null on the tileLevel
