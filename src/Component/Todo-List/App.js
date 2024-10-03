import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState({name:""});
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setVal((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, val];
      
    });
    setVal({name:' '})
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write something"
        name="name"
        value={val.name}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}> add</button>
      <div>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
