import { orange, cherry, kiwi, strawberry, peach } from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [kiwi, strawberry, orange, strawberry, kiwi, orange],
  [orange, kiwi, cherry, strawberry, peach, cherry],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [cherry, strawberry, peach, orange, kiwi, peach],
  [orange, kiwi, peach, cherry, strawberry, cherry],
];

const tileLevel2 = [
  [peach, orange, strawberry, orange, cherry, null],
  [strawberry, cherry, peach, kiwi, peach, null],
  [null, null, null, null, null, null],
  [peach, orange, strawberry, cherry, kiwi, null],
  [kiwi, cherry, kiwi, orange, peach, null],
  [null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null],
  [null, orange, strawberry, cherry, strawberry, null],
  [null, peach, cherry, kiwi, peach, null],
  [null, strawberry, orange, peach, kiwi, null],
  [null, kiwi, cherry, strawberry, orange, null],
  [null, null, null, null, null, null],
];

const boardLayoutBeginner2 = fixBoardLayout([
  tileLevel1,
  tileLevel2,
  tileLevel3,
]);

export { boardLayoutBeginner2 };
