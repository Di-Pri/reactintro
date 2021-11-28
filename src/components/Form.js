import React from "react";
import Button from "./Button";

export default function Form(props) {
  function submit(evt) {
    evt.preventDefault();
    props.onFormSubmit("hello");
  }
  return (
    <form onSubmit={submit}>
      <input />
      <Button />
    </form>
  );
}
