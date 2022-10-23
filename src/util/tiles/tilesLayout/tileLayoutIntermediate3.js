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
  [null, null, null, orange, null, null, null],
  [null, null, raspberry, cherry, peach, null, null],
  [null, banana, kiwi, strawberry, pineapple, watermelon, null],
  [banana, cherry, watermelon, orange, banana, strawberry, peach],
  [null, pineapple, raspberry, kiwi, pineapple, peach, null],
  [null, null, watermelon, cherry, raspberry, null, null],
  [null, null, null, peach, null, null, null],
];

const tileLevel2 = [
  [null, null, null, null, null, null, null],
  [null, null, kiwi, banana, null, null, null],
  [null, banana, cherry, peach, pineapple, null, null],
  [null, raspberry, watermelon, kiwi, strawberry, null, null],
  [null, null, banana, cherry, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null],
  [null, null, null, raspberry, null, null, null],
  [null, null, cherry, watermelon, strawberry, null, null],
  [null, pineapple, kiwi, raspberry, orange, peach, null],
  [null, null, watermelon, strawberry, pineapple, null, null],
  [null, null, null, kiwi, null, null, null],
  [null, null, null, strawberry, null, null, null],
];

const boardLayoutIntermediate3 = fixBoardLayout([
  tileLevel1,
  tileLevel2,
  tileLevel3,
]);

export { boardLayoutIntermediate3 };
