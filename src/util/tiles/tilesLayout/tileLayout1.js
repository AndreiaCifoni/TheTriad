import {
  orange,
  cherry,
  kiwi,
  strawberry,
  watermelon,
  peach,
  banana,
} from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [orange, kiwi, strawberry, kiwi, watermelon],
  [strawberry, peach, orange, strawberry, watermelon],
  [cherry, watermelon, orange, cherry, banana],
  [watermelon, kiwi, strawberry, banana, strawberry],
];

const tileLevel2 = [
  [orange, cherry, strawberry, kiwi, null],
  [kiwi, strawberry, cherry, peach, null],
  [orange, watermelon, banana, strawberry, null],
  [null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null],
  [null, orange, cherry, kiwi, null],
  [null, strawberry, watermelon, peach, null],
  [null, null, cherry, null, null],
];

const boardLayout1 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayout1 };
