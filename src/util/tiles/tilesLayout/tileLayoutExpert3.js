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
  [apple, cherry, strawberry, watermelon, null, null],
  [raspberry, kiwi, pear, peach, null, null],
  [watermelon, banana, orange, peach, pear, banana],
  [cherry, peach, kiwi, watermelon, strawberry, lemon],
  [null, null, apple, lemon, pineapple, banana],
  [null, null, raspberry, strawberry, watermelon, orange],
];

const tileLevel2 = [
  [orange, kiwi, banana, null, null, null],
  [cherry, peach, pear, null, null, null],
  [strawberry, watermelon, orange, raspberry, cherry, null],
  [null, null, banana, kiwi, peach, null],
  [null, null, strawberry, apple, pineapple, null],
  [null, null, null, null, null, null],
];

const tileLevel3 = [
  [cherry, null, null, null, null, null],
  [null, orange, pineapple, null, null, null],
  [null, lemon, cherry, strawberry, null, null],
  [null, null, peach, kiwi, watermelon, null],
  [null, null, null, orange, banana, null],
  [null, null, null, null, null, kiwi],
];

const boardLayoutExpert3 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayoutExpert3 };
