import { banana, kiwi, strawberry, lemon, pear, orange } from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [banana, banana, banana, banana, banana],
  [banana, kiwi, banana, kiwi, banana],
  [banana, banana, banana, banana, banana],
  [banana, banana, kiwi, banana, banana],
];

const tileLevel2 = [
  [strawberry, strawberry, strawberry, strawberry, null],
  [lemon, strawberry, strawberry, strawberry, null],
  [strawberry, strawberry, lemon, strawberry, null],
  [null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null],
  [null, pear, pear, pear, null],
  [null, orange, orange, orange, null],
  [null, null, banana, null, null],
];

const boardLayout1 = fixBoardLayout([tileLevel1, tileLevel2, tileLevel3]);

export { boardLayout1 };
