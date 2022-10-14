const className = (tile, layoutIndex) => {
  if (tile) {
    if (layoutIndex === 0) {
      return "tile";
    } else if (layoutIndex === 1) {
      return "tile tileLevel2-position";
    }
    return "tile tileLevel3-position";
  }
  return "tile-null";
};

const classNameBeginner = (tile, layoutIndex) => {
  if (tile) {
    if (layoutIndex === 0) {
      return "tile";
    } else if (layoutIndex === 1) {
      return "tile tileLevel2Beginner-position";
    }
    return "tile tileLevel3Beginner-position";
  }
  return "tile-null";
};

const classNameIntermediate = (tile, layoutIndex) => {
  if (tile) {
    if (layoutIndex === 0) {
      return "tile";
    } else if (layoutIndex === 1) {
      return "tile tileLevel2Intermediate-position";
    }
    return "tile tileLevel3Intermediate-position";
  }
  return "tile-null";
};

const classNameExpert = (tile, layoutIndex) => {
  if (tile) {
    if (layoutIndex === 0) {
      return "tile";
    } else if (layoutIndex === 1) {
      return "tile tileLevel2Expert-position";
    }
    return "tile tileLevel3Expert-position";
  }
  return "tile-null";
};

// className={
//   tile
//     ? layoutIndex === 0
//       ? "tile"
//       : layoutIndex === 1
//       ? "tile tileLevel2-position"
//       : "tile tileLevel3-position"
//     : "tile-null"
// }

export { className, classNameBeginner, classNameIntermediate, classNameExpert };
