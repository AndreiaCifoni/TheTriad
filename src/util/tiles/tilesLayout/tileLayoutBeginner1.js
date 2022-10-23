import { orange, cherry, kiwi, strawberry, peach } from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [orange, cherry, peach, strawberry, cherry, orange],
  [peach, strawberry, orange, kiwi, cherry, peach],
  [cherry, kiwi, cherry, peach, orange, peach],
  [cherry, orange, strawberry, cherry, orange, kiwi],
  [strawberry, peach, kiwi, orange, peach, strawberry],
];

const tileLevel2 = [
  [kiwi, peach, orange, strawberry, cherry, null],
  [strawberry, cherry, orange, kiwi, cherry, null],
  [orange, strawberry, kiwi, peach, strawberry, null],
  [cherry, orange, peach, kiwi, orange, null],
  [null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null],
  [null, cherry, peach, strawberry, orange, null],
  [null, kiwi, strawberry, cherry, kiwi, null],
  [null, orange, cherry, peach, kiwi, null],
  [null, cherry, kiwi, strawberry, orange, null],
];

const boardLayoutBeginner1 = fixBoardLayout([
  tileLevel1,
  tileLevel2,
  tileLevel3,
]);

export { boardLayoutBeginner1 };
