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
  [null, null, orange, watermelon, apple, cherry, kiwi],
  [raspberry, null, null, lemon, strawberry, pineapple, raspberry],
  [kiwi, peach, null, null, kiwi, peach, lemon],
  [kiwi, orange, apple, null, null, raspberry, strawberry],
  [watermelon, cherry, pear, lemon, null, null, cherry],
  [orange, strawberry, banana, kiwi, raspberry, null, null],
];

const tileLevel2 = [
  [null, null, cherry, lemon, apple, banana, null],
  [peach, null, null, apple, strawberry, peach, null],
  [watermelon, raspberry, null, null, pineapple, cherry, null],
  [kiwi, strawberry, banana, null, null, pear, null],
  [orange, pear, lemon, peach, null, null, null],
  [null, null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null],
  [null, null, null, lemon, apple, raspberry, null],
  [null, pineapple, null, null, null, orange, null],
  [null, strawberry, null, null, null, orange, null],
  [null, peach, apple, cherry, null, null, null],
  [null, null, null, null, null, null, null],
];

const boardLayoutExpert1 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayoutExpert1 };
