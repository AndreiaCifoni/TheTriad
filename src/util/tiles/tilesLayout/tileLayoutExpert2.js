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
  [orange, pineapple, cherry, peach, null, null, null, null],
  [lemon, kiwi, watermelon, apple, null, pear, banana, null],
  [raspberry, lemon, orange, peach, null, banana, watermelon, null],
  [pear, cherry, raspberry, pineapple, null, null, null, null],
  [null, null, null, null, banana, cherry, apple, strawberry],
  [null, orange, watermelon, null, raspberry, kiwi, banana, lemon],
  [null, kiwi, peach, null, pineapple, strawberry, pear, raspberry],
  [null, null, null, null, lemon, orange, peach, pineapple],
];

const tileLevel2 = [
  [strawberry, banana, pineapple, null, null, peach, null, null],
  [apple, kiwi, raspberry, null, null, orange, null, null],
  [pear, strawberry, banana, null, null, apple, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, strawberry, cherry, lemon, null],
  [peach, pineapple, pear, null, cherry, watermelon, apple, null],
  [null, null, null, null, watermelon, kiwi, raspberry, null],
  [null, null, null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null, null],
  [null, orange, pear, null, null, null, null, null],
  [null, cherry, watermelon, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, kiwi, lemon, null],
  [null, null, null, null, null, apple, strawberry, null],
  [null, null, null, null, null, null, null, null],
];

const boardLayoutExpert2 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayoutExpert2 };
