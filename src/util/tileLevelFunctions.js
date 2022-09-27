//-----------------for all Tile Upper Level -----------------
const getTileTopLeft = (x, y, z, tileUpperLevel) => {
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

const isTileFree = (x, y, z, tileUpperLevel) => {
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

module.exports = {
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight,
  removeTile,
  isTileFree,
  getTileUpperLevel,
};
