import {
  orange,
  cherry,
  kiwi,
  strawberry,
  pineapple,
  watermelon,
  apple,
  raspberry,
  lemon,
  pear,
  peach,
  banana,
} from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [orange, kiwi, raspberry, kiwi, apple],
  [strawberry, peach, pineapple, pear, watermelon],
  [cherry, apple, orange, lemon, banana],
  [watermelon, kiwi, pear, banana, strawberry],
];

const tileLevel2 = [
  [pineapple, lemon, raspberry, kiwi, null],
  [kiwi, pear, cherry, peach, null],
  [orange, apple, banana, strawberry, null],
  [null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null],
  [null, pineapple, lemon, raspberry, null],
  [null, kiwi, watermelon, peach, null],
  [null, null, cherry, null, null],
];

const boardLayout1 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayout1 };
