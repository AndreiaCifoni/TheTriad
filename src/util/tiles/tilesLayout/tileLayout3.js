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

const tileLevel1 = [
  [null, null, orange, watermelon, apple, cherry, kiwi],
  [raspberry, null, null, lemon, strawberry, pineapple, raspberry],
  [kiwi, peach, null, null, kiwi, peach, lemon],
  [kiwi, orange, apple, null, null, raspberry, strawberry],
  [watermelon, cherry, pear, lemon, null, null, cherry],
  [orange, strawberry, banana, kiwi, raspberry, null, null],
];

const tileLevel2 = [
  [null, null, cherry, lemon, apple, banana],
  [peach, null, null, apple, strawberry, peach],
  [watermelon, raspberry, null, null, pineapple, cherry],
  [kiwi, strawberry, banana, null, null, pear],
  [orange, pear, lemon, peach, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null],
  [null, null, null, lemon, apple, raspberry, null],
  [null, pineapple, null, null, null, orange, null],
  [null, strawberry, null, null, null, orange, null],
  [null, peach, apple, cherry, null, null, null],
  [null, null, null, null, null, null, null],
];

const boardLayout3 = [tileLevel1, tileLevel2, tileLevel3];

export { boardLayout3 };
