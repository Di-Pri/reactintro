import React, { useState } from "react";

function Dumb(props) {
  return <div>{props.something}</div>;
}

export default function Counter(props) {
  const [count, setCount] = useState(0);
  function updateClick(e) {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    // Whenever I modify state I must use my updater function
    // setCount(count++); - Not allowed. I must never modify state directly
  }
  return (
    <>
      <button onClick={updateClick}>Click ({count})</button>;
      <Dumb something={count} />
      <Dumb something={count} />
    </>
  );
}
