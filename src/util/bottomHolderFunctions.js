import * as R from "ramda";
import { boardNull } from "./tiles/beginnerTiles";

//-----------------Bottom Tile Holder -----------------

const removeGroupBottomHolder = (bottomHolderSorted) => {
  const groupedTiles = R.groupWith(
    (a, b) => a.title === b.title,
    bottomHolderSorted
  );

  const filteredTiles = groupedTiles.filter((group) => group.length < 3);

  return filteredTiles.flat();
};

const isGameOver = (bottomTileHolder) => bottomTileHolder.length >= 7;

const isWinner = (tileLayout, bottomHolder) => {
  const flattenedTileLayout = tileLayout.flat(3);
  const isTileNull = flattenedTileLayout.every((tile) => tile === null);
  console.log(flattenedTileLayout);
  console.log(isTileNull);
  return isTileNull && !bottomHolder.length;
};

export { removeGroupBottomHolder, isGameOver, isWinner };
