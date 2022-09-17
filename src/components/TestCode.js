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

  const tileLevel1 = [
    [tile1, tile2, tile3],
    [tile2, tile3, tile1],
    [tile3, tile1, tile2],
  ];

  const tileLevel2 = [
    [tile3, tile1, tile2],
    [tile1, tile2, tile3],
    [tile2, tile3, tile1],
  ];

  return (
    <div>
      <div>
        {tileLevel1.map((tiles) => {
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
      <div>
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
