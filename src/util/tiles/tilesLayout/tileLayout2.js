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
  [watermelon, cherry, pear, null, raspberry, orange, watermelon],
  [orange, orange, apple, null, cherry, strawberry, raspberry],
  [raspberry, kiwi, raspberry, null, pineapple, apple, lemon],
  [null, null, null, null, null, null, null],
  [pear, apple, peach, null, orange, kiwi, lemon],
  [lemon, lemon, lemon, null, banana, kiwi, raspberry],
  [strawberry, pineapple, cherry, null, kiwi, apple, peach],
];

const tileLevel2 = [
  [kiwi, apple, null, null, kiwi, peach],
  [pear, cherry, null, null, peach, peach],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [cherry, banana, null, null, strawberry, apple],
  [pineapple, lemon, null, null, orange, banana],
  [null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null],
  [null, cherry, null, null, null, peach, null],
  [null, null, null, null, null, null, null],
  [null, null, null, raspberry, null, null, null],
  [null, null, null, null, null, null, null],
  [null, watermelon, null, null, null, orange, null],
  [null, null, null, null, null, null, null],
];

const boardLayout2 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayout2 };
