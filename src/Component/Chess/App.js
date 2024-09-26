// // Create a chessboard Pattern in React.js

// // Create a 2-Dimensional array of size N*M (N- 8times, M- 8Times)

// import React, { useEffect, useState } from "react";
// import "./App.css"
// const App = () => {
//   const M = 8;
//   const N = 8;

//   const [chess, setChess] = useState([]);

//   useEffect(() => {
//     const result = [];
//     for (let i = 0; i < N; i++) {
//       const row = Array.from({ length: M });
//       result.push(row);
      

//     }
//     setChess(result)
//   }, []);
//   return (
//   <div>
//     <h2>dscdsc</h2>
// {chess.length > 0 && chess.map((row, index)=> {
//     return(
//         <div className="row" key={index}>
//             {row.map((_,cIndex)=>{
//                 return(
//                     <div className={`box ${
//                         (index + cIndex) %2===0 ?"black":"white"
//                     }`} key={cIndex}></div>
//                 )
//             })}
//         </div>
//     )
// })}
//   </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const M = 8;
  const N = 8;

  const [chess, setChess] = useState([]);

  useEffect(() => {
    const result = [];
    for (let i = 0; i < N; i++) {
      const row = Array.from({ length: M });
      result.push(row);
    }
    setChess(result);
  }, []);

  // check status
  return (
    <div className="chessboard">
      {chess.length > 0 &&
        chess.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex}>
              {row.map((_, colIndex) => {
                return (
                  <div
                    className={`box ${
                      (rowIndex + colIndex) % 2 === 0 ? "black" : "white"
                    }`}
                    key={colIndex}
                  ></div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default App;
