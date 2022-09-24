// import React, { useState } from "react";
// import "../style.css";

// const TestCode = () => {
//   //selected will pass the value to bottom
//   const [selected, setSelected] = useState(null);
//   //const [deleteTile, setDeleteTile] = useState([]);

//   const onLevel1Click = (index2, index1) => {
//     const x = tileLevel1.indexOf(index1);
//     const y = index2;

//     setSelected(tileLevel1[x][y]);
//     //should I use setDeleteTile in a useEffect?...in delete > set tile to null and change its class so I can use visibility: hidden
//     //setDeleteTile((tileLevel1[y][x] = null));
//   };

//   return (
//     <div>
//       <div className="level1">
//         {tileLevel1.map((tiles, index1) => {
//           return (
//             <div>
//               {tiles.map((tile, index2, index1) => {
//                 return (
//                   <img
//                     onClick={() => onLevel1Click(index2, index1)}
//                     className="tile-img"
//                     src={tile?.url}
//                     alt={tile?.title}
//                   />
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//       <div className="level2">
//         {tileLevel2.map((tiles) => {
//           return (
//             <div>
//               {tiles.map((tile) => {
//                 return (
//                   <img className="tile-img" src={tile?.url} alt={tile?.title} />
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TestCode;
