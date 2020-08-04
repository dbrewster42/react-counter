import React, { useState } from "react";

export default function ButtonPad() {
  const [count, setCount] = useState(0);
  let [lastNumber, setLastNumber] = useState([]);

  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };
  const handleIncrement = () => {
    setLastNumber(count);
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setLastNumber(count);
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setLastNumber(count);
    setCount(() => 0);
  };
  //   const double = () => {
  //     setCount((prevCount) => prevCount * 2);
  //   };
  const last = () => {
    setCount(lastNumber);
  };
  const doubleDecrease = () => {
    setLastNumber(count);
    setCount((prevCount) => prevCount - 2);
  };
  const fiveIncrease = () => {
    setLastNumber(count);
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div id="buttonp">
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
      <button className="reset" onClick={last}>
        Undo
      </button>
      <button className="up" onClick={fiveIncrease}>
        Add 5
      </button>
    </div>
  );
}
