import * as R from "ramda";

//-----------------Bottom Tile Holder -----------------

const tilesInOrder = (bottomTileHolder) => {
  return bottomTileHolder.sort();
};

// const addTileToBottomHolder = (tile, bottomTileHolder) => {
//   return [...bottomTileHolder, tile];
// };

const removeGroupBottomHolder = (bottomHolderSorted) => {
  const groupedTiles = R.groupWith(
    (a, b) => a.title === b.title,
    bottomHolderSorted
  );

  const filteredTiles = groupedTiles.filter((group) => group.length < 3);

  return filteredTiles.flat();
};

//should be called after "addTile"... and the "removeGroup"
const isGameOver = (bottomTileHolder) => {
  return bottomTileHolder.length >= 7;
};

export {
  tilesInOrder,
  //addTileToBottomHolder,
  removeGroupBottomHolder,
  isGameOver,
};
