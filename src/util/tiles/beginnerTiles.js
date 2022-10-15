const tile1 = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 1,
};

const tile2 = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 2,
};

const tile3 = {
  title: "strawberry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
  id: 3,
};

const cherry = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 4,
};

const cherry = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 5,
};

const cherry = {
  title: "strawberry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
  id: 6,
};

const kiwi = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 7,
};

const kiwi = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 8,
};

const kiwi = {
  title: "strawberry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
  id: 9,
};

const strawberry = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 10,
};

const strawberry = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 11,
};

const strawberry = {
  title: "strawberry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
  id: 12,
};

const pineapple = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 13,
};

const pineapple = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 14,
};

const pineapple = {
  title: "strawberry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
  id: 15,
};

const watermelon = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 16,
};

const watermelon = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 17,
};

const watermelon = {
  title: "strawberry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843920/fruits/fruit7_sljc7e.jpg",
  id: 18,
};

const apple = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 19,
};

const apple = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 20,
};

const apple = {
  title: "cherry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843921/fruits/fruit4_xlmd3h.jpg",
  id: 21,
};

const raspberry = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 22,
};

const raspberry = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 23,
};

const raspberry = {
  title: "cherry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843921/fruits/fruit4_xlmd3h.jpg",
  id: 24,
};

const lemon = {
  title: "orange",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1663431780/fruits/fruit9_wqgvcg.jpg",
  id: 25,
};

const lemon = {
  title: "kiwi",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843922/fruits/fruit3_stcebg.jpg",
  id: 26,
};

const lemon = {
  title: "cherry",
  url: "https://res.cloudinary.com/deiacifoni/image/upload/v1662843921/fruits/fruit4_xlmd3h.jpg",
  id: 27,
};

const tileLevel1 = [
  [tile1, tile2, tile3],
  [tile4, tile5, tile6],
  [kiwi, kiwi, kiwi],
];

const tileLevel2 = [
  [strawberry, pineapple, watermelon],
  [strawberry, strawberry, watermelon],
  [watermelon, pineapple, pineapple],
];

const tileLevel3 = [
  [raspberry, lemon, raspberry],
  [apple, lemon, lemon],
  [apple, apple, raspberry],
];

const boardLayout = [tileLevel1, tileLevel2, tileLevel3];

export { tileLevel1, tileLevel2, tileLevel3, boardLayout };
