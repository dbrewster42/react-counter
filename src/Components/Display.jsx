import React, { useState } from "react";

function Display(props) {
  // const [display,setDisplay] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div
      style={{
        background: isOn ? "yellow" : "blue",
      }}
      onClick={toggleLight}
    >
      <h2 className="display">Counter</h2>
    </div>
  );
}

export default Display;
