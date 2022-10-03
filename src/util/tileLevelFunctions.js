//-----------------for all Tile Upper Level -----------------
const getTileTopLeft = (x, y, z, tileUpperLevel) => {
  if (tileUpperLevel === null) {
    return null;
  }
  if ((z + 1) % 2 === 0) {
    return tileUpperLevel[x][y];
  }
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

const getTileTopRight = (x, y, z, tileUpperLevel) => {
  if (tileUpperLevel === null) {
    return null;
  }
  if ((z + 1) % 2 === 0) {
    if (y + 1 > tileUpperLevel[0].length - 1) {
      return null;
    }
    return tileUpperLevel[x][y + 1];
  }
  if (x - 1 < 0) {
    return null;
  } else if (x - 1 > tileUpperLevel.length - 1) {
    return null;
  }
  return tileUpperLevel[x - 1][y];
};

const getTileBottomLeft = (x, y, z, tileUpperLevel) => {
  if (tileUpperLevel === null) {
    return null;
  }
  if ((z + 1) % 2 === 0) {
    if (x + 1 > tileUpperLevel.length - 1) {
      return null;
    }
    return tileUpperLevel[x + 1][y];
  }
  if (y - 1 < 0) {
    return null;
  } else if (y - 1 > tileUpperLevel[0].length - 1) {
    return null;
  }
  return tileUpperLevel[x][y - 1];
};

const getTileBottomRight = (x, y, z, tileUpperLevel) => {
  if (tileUpperLevel === null) {
    return null;
  }
  if ((z + 1) % 2 === 0) {
    if (
      x + 1 > tileUpperLevel.length - 1 ||
      y + 1 > tileUpperLevel[0].length - 1
    ) {
      return null;
    }
    return tileUpperLevel[x + 1][y + 1];
  }
  return tileUpperLevel[x][y];
};

//-----------------Remove tile -----------------

const removeTile = (x, y, tileLevel) => {
  return tileLevel.map((tileRow) => {
    return tileRow.map((tile) => {
      if (tile === tileLevel[x][y]) {
        //search how to transform content in a object in null
        return null;
      }
      return tile;
    });
  });
};

//-----------------Get TileUpperLevel -----------------

const getTileUpperLevel = (z, levelLayout) => {
  if (z + 1 > levelLayout.length - 1) {
    return null;
  }
  return levelLayout[z + 1];
};

//-----------------Check for free tile -----------------

const getIsTileFree = (x, y, z, tileUpperLevel) => {
  if (
    getTileTopLeft(x, y, z, tileUpperLevel) === null &&
    getTileTopRight(x, y, z, tileUpperLevel) === null &&
    getTileBottomLeft(x, y, z, tileUpperLevel) === null &&
    getTileBottomRight(x, y, z, tileUpperLevel) === null
  ) {
    return true;
  }
  return false;
};

//-----------------Get selected Tile (if it's free) -----------------

// const getTileSelected = (isTileFree, tileLevel, x, y) => {
//   if (isTileFree) {
//     return tileLevel[x][y];
//   }
// };

module.exports = {
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight,
  removeTile,
  getIsTileFree,
  getTileUpperLevel,
  //getTileSelected,
};
