import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function List(props) {
  // I give each Card a property called "key" and set it's value to the ID from the data
  const cards = props.cards.map((card) => <Card onCardMove={props.onCardMove} onCardDelete={props.onCardDelete} key={card.id} {...card} />);
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>{cards}</ul>
      <Form onFormSubmit={props.onFormSubmit} />
    </section>
  );
}
