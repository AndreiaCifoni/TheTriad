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

//-----------------Check for free tile -----------------

const isTileFree = (
  getTileTopLeft,
  getTileTopRight,
  getTileBottomLeft,
  getTileBottomRight
) => {
  if (
    getTileTopLeft === null &&
    getTileTopRight === null &&
    getTileBottomLeft === null &&
    getTileBottomRight === null
  ) {
    return true;
  }
  return false;
};

//-----------------Bottom Tile Holder -----------------
const arr = [tile1, tile2, tile3, tile1, tile4, tile1, tile2];

const tilesInOrder = (bottomTileHolder) => {
  return tile.sort();
};
