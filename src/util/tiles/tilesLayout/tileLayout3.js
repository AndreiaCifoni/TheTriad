const tileLeve1 = [
  [null, null, tile, tile, tile, tile, tile],
  [tile, null, null, tile, tile, tile, tile],
  [tile, tile, null, null, tile, tile, tile],
  [tile, tile, tile, null, null, tile, tile],
  [tile, tile, tile, tile, null, null, tile],
  [tile, tile, tile, tile, tile, null, null],
];

const tileLevel2 = [
  [null, null, null, tile, tile, tile, tile],
  [tile, null, null, null, tile, tile, tile],
  [tile, tile, null, null, null, tile, tile],
  [tile, tile, tile, null, null, null, tile],
  [tile, tile, tile, tile, null, null, null],
];

const tileLevel3 = [
  [null, null, null, null, null, null, null],
  [null, null, null, tile, tile, tile, null],
  [null, tile, null, null, null, tile, null],
  [null, tile, null, null, null, tile, null],
  [null, tile, tile, tile, null, null, null],
  [null, null, null, null, null, null, null],
];

const boardLayout = [tileLevel1, tileLevel2, tileLevel3];
