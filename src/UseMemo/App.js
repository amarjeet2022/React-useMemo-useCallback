import React, { useState } from "react";
import { useMemo } from "react";
const App = () => {
  const [number, setNumber] = useState(0);
  const [bgcolor, setBgcolor] = useState(false);
  const doubleNumber = useMemo(() => {
   return  slowFunction(number)}, [number]);

  const theme = {
    backgroundColor: bgcolor ? "#333" : "#fff",
    color: bgcolor ? "#fff" : "#333",
  };
  return (
    <div>
      <input
        placeholder="write something"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setBgcolor((prev) => !prev)}>changeColor</button>
      <div style={theme}>{doubleNumber}</div>
    </div>
  );
};

export default App;

const slowFunction = (num) => {
  console.log("Calling slow function");
  for (let i = 0; i <= 100000000000000; i++) {
    return num * 2;
  }
};
