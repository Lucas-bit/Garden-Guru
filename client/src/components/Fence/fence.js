import React from "react";
import "./style.css";
import WoodenFence from '../../images/wooden-fence-500px.png'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Fence() {
  return (
    <React.Fragment>
    <div className="fence-border"></div>
    <img src={WoodenFence} className="fence" alt='woodenfence'>
    </img>
    </React.Fragment>
  );
}


export default Fence;

