import { v4 as uuidv4 } from "uuid";

const fixBoardLayout = (boardLayout) => {
  return boardLayout.map((level) => {
    return level.map((row) => {
      return row.map((tile) => {
        if (tile) {
          return { ...tile, id: uuidv4() };
        }
        return tile;
      });
    });
  });
};

export { fixBoardLayout };
