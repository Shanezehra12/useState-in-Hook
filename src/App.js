import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const IncrementNumber = () => {
    setCount(count + 1);
  };
 
  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncrementNumber}> Click Me </button>
    </>
  );
};

export default App;
