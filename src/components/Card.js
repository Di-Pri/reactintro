import React from "react";
import Button from "./Button";

export default function Card(props) {
  console.log(props);
  function onDelete() {
    props.onCardDelete(props._id);
  }
  function onMove(where) {
    // calling the parent function that was passed all the way down from App.js
    props.onCardMove(props._id, where);
  }
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.color}</p>
      <Button />
      <button onClick={onDelete}>Delete me</button>
      <button onClick={() => onMove("todo")}>Move to ToDo</button>
      <button onClick={() => onMove("doing")}>Move to Doing</button>
      <button onClick={() => onMove("done")}>Move to Done</button>
    </li>
  );
}
