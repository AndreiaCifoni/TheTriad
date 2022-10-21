import {
  orange,
  cherry,
  kiwi,
  strawberry,
  pineapple,
  watermelon,
  raspberry,
  pear,
  peach,
  banana,
} from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [watermelon, cherry, pear, null, raspberry, orange, watermelon],
  [orange, orange, strawberry, null, cherry, strawberry, raspberry],
  [raspberry, kiwi, raspberry, null, pineapple, strawberry, kiwi],
  [null, null, null, null, null, null, null],
  [pear, strawberry, peach, null, orange, kiwi, kiwi],
  [kiwi, banana, kiwi, null, banana, kiwi, raspberry],
  [strawberry, pineapple, cherry, null, kiwi, strawberry, peach],
];

const tileLevel2 = [
  [kiwi, strawberry, null, null, kiwi, raspberry, null],
  [pear, cherry, null, null, pineapple, peach, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [cherry, banana, null, null, strawberry, strawberry, null],
  [peach, kiwi, null, null, orange, kiwi, null],
  [null, null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null],
  [null, cherry, null, null, null, peach, null],
  [null, null, null, null, null, null, null],
  [null, null, null, peach, null, null, null],
  [null, null, null, null, null, null, null],
  [null, watermelon, null, null, null, orange, null],
  [null, null, null, null, null, null, null],
];

const boardLayout2 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayout2 };
