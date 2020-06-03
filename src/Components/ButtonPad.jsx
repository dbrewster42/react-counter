import React, { useState } from "react";

export default function ButtonPad() {
  const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(() => 0);
  };
  const double = () => {
    setCount((prevCount) => prevCount * 2);
  };
  const doubleDecrease = () => {
    setCount((prevCount) => prevCount - 2);
  };
  const fiveIncrease = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <div className="box">{count}</div>

      <button className="down" onClick={decreaseCount}>
        Down
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <button className="up" onClick={handleIncrement}>
        Up
      </button>
      <br></br>
      <button className="down" onClick={doubleDecrease}>
        -2
      </button>
      <button className="up" onClick={double}>
        Double
      </button>
      <button className="up" onClick={fiveIncrease}>
        Add 5
      </button>
    </div>
  );
}
