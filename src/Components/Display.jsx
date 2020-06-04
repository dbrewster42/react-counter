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
        color: isOn ? "yellow" : "blue",
      }}
      onClick={toggleLight}
    >
      <h2 className="display">Click Here</h2>
    </div>
  );
}

export default Display;
