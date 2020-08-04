import React from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";

function Counter() {
  return (
    <div className="counter">
      <Display />
      <ButtonPad />
    </div>
  );
}

export default Counter;

////
// export default class ButtonPad extends Component {
//   state = {
//     value: 0,
//   };
//   constructor(props) {
//     super(props);
//   }
//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <ButtonPad count="" />
//     );
//   }
// }
