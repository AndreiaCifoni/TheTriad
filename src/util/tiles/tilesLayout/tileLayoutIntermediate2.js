import {
  orange,
  cherry,
  kiwi,
  strawberry,
  pineapple,
  watermelon,
  raspberry,
  peach,
  banana,
} from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [orange, cherry, strawberry, watermelon, null, null],
  [raspberry, kiwi, pineapple, peach, null, null],
  [watermelon, banana, orange, peach, pineapple, banana],
  [cherry, peach, kiwi, watermelon, strawberry, raspberry],
  [null, null, orange, raspberry, pineapple, banana],
  [null, null, raspberry, strawberry, watermelon, orange],
];

const tileLevel2 = [
  [orange, kiwi, banana, null, null, null],
  [cherry, peach, pineapple, null, null, null],
  [strawberry, watermelon, orange, raspberry, cherry, null],
  [null, null, banana, kiwi, peach, null],
  [null, null, strawberry, orange, pineapple, null],
  [null, null, null, null, null, null],
];

const tileLevel3 = [
  [cherry, null, null, null, null, null],
  [null, orange, pineapple, null, null, null],
  [null, raspberry, cherry, strawberry, null, null],
  [null, null, peach, kiwi, watermelon, null],
  [null, null, null, orange, banana, null],
  [null, null, null, null, null, kiwi],
];

const boardLayoutIntermediate2 = fixBoardLayout([
  tileLevel1,
  tileLevel2,
  tileLevel3,
]);

export { boardLayoutIntermediate2 };
