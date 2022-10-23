import { orange, cherry, kiwi, strawberry, peach } from "./tilesList";
import { fixBoardLayout } from "./fixBoardLayout";

const tileLevel1 = [
  [orange, cherry, null, null, orange, kiwi],
  [kiwi, strawberry, null, null, kiwi, strawberry],
  [peach, peach, null, null, cherry, orange],
  [cherry, orange, null, null, strawberry, strawberry],
  [strawberry, kiwi, null, null, peach, kiwi],
  [cherry, peach, null, null, cherry, orange],
];

const tileLevel2 = [
  [kiwi, peach, null, strawberry, peach, null],
  [cherry, orange, null, cherry, orange, null],
  [kiwi, strawberry, null, peach, strawberry, null],
  [orange, cherry, null, kiwi, orange, null],
  [peach, kiwi, null, peach, cherry, null],
  [null, null, null, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null],
  [null, kiwi, strawberry, peach, orange, null],
  [null, cherry, orange, cherry, strawberry, null],
  [null, strawberry, peach, kiwi, cherry, null],
  [null, orange, kiwi, peach, strawberry, null],
  [null, null, null, null, null, null],
];

const boardLayoutBeginner3 = fixBoardLayout([
  tileLevel1,
  tileLevel2,
  tileLevel3,
]);

export { boardLayoutBeginner3 };
