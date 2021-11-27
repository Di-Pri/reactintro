import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function List(props) {
  // When component is dynamic (created through an array), it needs a "key" property that is unique to that list
  // so react can update things efficiently
  // Here I am giving each Card a property called "key" and setting it's value to the ID from the data
  const cards = props.cards.map((card) => <Card key={card.id} {...card} />);
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>{cards}</ul>
      <Form />
    </section>
  );
}
