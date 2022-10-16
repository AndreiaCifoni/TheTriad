import React from "react";

const TestCode = () => {
  return <div>Im test</div>;
};

export default TestCode;

// .tileLevel2beginner-position {
//   position: relative;
//   top: -250px;
// }

// .tileLevel3beginner-position {
//   position: relative;
//   top: -493px;
// }

// .tileLevel2intermediate-position {
//   position: relative;
//   top: -458px;
// }

// .tileLevel3intermediate-position {
//   position: relative;
//   top: -915px;
// }

// .tileLevel2expert-position {
//   position: relative;

//   top: -388px;
// }

// .tileLevel3expert-position {
//   position: relative;
//   top: -774px;
// }

//********className Board on Tile */
// className={
//   tile
//     ? layoutIndex === 0
//       ? "tile"
//       : layoutIndex === 1
//       ? "tile tileLevel2-position"
//       : "tile tileLevel3-position"
//     : "tile-null"
// }

//************GRID
//grid-container
//      -display:grid
//      -grid-template-columns: 100px 100px 50px  ou 2fr 1fr
//                          ou repeat(3, 100px)
//      -grid-auto-row(vai deixar td do mesmo tamanho se nao tiver definido a row por exemplo)
//      -grid-row/column-gap  ou so gap pros dois
//      -justify/align-CONTENT - vai alinhar o bloco em relacao ao parent
//      -justify-ITEMS: - alinha o que tem dentro
//
//grid-item
//      -grid-column-start / -end
//        -ou os dois:  "grid-column: 1  / 2 "
