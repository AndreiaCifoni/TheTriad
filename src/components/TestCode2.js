//-----------------for EVEN Tile Upper Level -----------------
const getEvenLevelTileTopLeft = (x, y, tileUpperLevel) => {
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

const getEvenLevelTileTopRight = (x, y, tileUpperLevel) => {
  if (x - 1 < 0) {
    return null;
  } else if (x - 1 > tileUpperLevel.length - 1) {
    return null;
  }
  return tileUpperLevel[x - 1][y];
};

const getEvenLevelTileBottomLeft = (x, y, tileUpperLevel) => {
  if (y - 1 < 0) {
    return null;
  } else if (y - 1 > tileUpperLevel[0].length - 1) {
    return null;
  }
  return tileUpperLevel[x][y - 1];
};

const getEvenLevelTileBottomRight = (x, y, tileUpperLevel) => {
  return tileUpperLevel[x][y];
};

//-----------------for ODD Tile Upper Level -----------------

const getOddLevelTileTopLeft = (x, y, tileUpperLevel) => {
  return tileUpperLevel[x][y];
};

const getOddLevelTileTopRight = (x, y, tileUpperLevel) => {
  if (y + 1 > tileUpperLevel[0].length - 1) {
    return null;
  }
  return tileUpperLevel[x][y + 1];
};

const getOddLevelTileBottomLeft = (x, y, tileUpperLevel) => {
  if (x + 1 > tileUpperLevel.length - 1) {
    return null;
  }
  return tileUpperLevel[x + 1][y];
};

const getOddLevelTileBottomRight = (x, y, tileUpperLevel) => {
  if (
    x + 1 > tileUpperLevel.length - 1 ||
    y + 1 > tileUpperLevel[0].length - 1
  ) {
    return null;
  }
  return tileUpperLevel[x + 1][y + 1];
};

//-----------------Remove tile -----------------

const tileLevel1 = [
  [tile1, tile2, tile3],
  [tile5, tile6, tile4],
  [tile9, tile7, tile8],
];
const removeTile = tileLevel1.map((tiles) => {
  tiles.filter((tile) => {
    if (tile === tile6) {
      return (tile = null);
    }
    return tile;
  });
});

console.log(removeTile);

const newArray = tileLevel1[1].map((tile) => {
  if (tile === tile6) {
    return (tile = null);
  }
  return tile;
});
// const removeTile = (tileLevel, x, y) => {
//   tileLevel.map((tile, x, y) => {
//     if (tile === tileLevel[x][y]) {
//       return (tile = null);
//     }
//     return tile;
//   });
// };

// console.log(removeTile(1, 2, tileLevel1));
