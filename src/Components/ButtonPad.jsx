import React, { useState } from "react";

export default function ButtonPad() {
  const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };
  //set element to on/off
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(() => 0);
  };
  const fiveIncrease = () => {
    setCount((prevCount) => prevCount + 5);
  };
  const doubleDecrease = () => {
    setCount((prevCount) => prevCount - 2);
  };
  return (
    <div>
      <div className="box">{count}</div>
      <button onClick={fiveIncrease}>Five Up</button>
      <button onClick={handleIncrement}>Up Button</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decreaseCount}>Down Button</button>
      <button onClick={doubleDecrease}>Double Down</button>
    </div>
  );
}
