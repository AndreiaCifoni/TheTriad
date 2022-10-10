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

const isWinner = (tileLayout, bottomHolder) =>
  tileLayout === boardNull && bottomHolder === null;

export { removeGroupBottomHolder, isGameOver, isWinner };
