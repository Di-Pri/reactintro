import React, { useState } from "react";

export default function Button(props) {
  // I set useState with an initial value of 0 and get back a state variable that I
  //   called "clicks" and an updater function that I called "setClicks"
  const [clicks, setClicks] = useState(0);
  function buttonClicked(e) {
    // I set state to be equal to its current value + 1
    setClicks(clicks + 1);
  }
  // I set an onCLick event handler to buttonClicked
  return <button onClick={buttonClicked}>{clicks}</button>;
}
