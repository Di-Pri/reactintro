import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([
    {
      title: "Make it dynamic",
      list: "todo",
      added: 2345345345,
      id: 1,
      color: "lightpink",
      assignedTo: ["di"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 2392376395,
      id: 2,
      color: "lightblue",
      assignedTo: ["di", "ma"],
    },
  ]);

  function onFormSubmit(data) {
    console.log("form submited", data);
    setCards(cards.concat(data));
  }

  function onCardMove(id, whereTo) {
    console.log(id, whereTo);
    const nextCards = cards.map((card) => {
      if (card.id === id) {
        card.list = whereTo;
      }
      return card;
    });
    setCards(nextCards);
  }

  function onCardDelete(id) {
    const nextCards = cards.filter((card) => card.id !== id);
    setCards(nextCards);
  }

  return (
    <div className="App">
      <Nav />
      <Main onCardMove={onCardMove} onCardDelete={onCardDelete} onFormSubmit={onFormSubmit} cards={cards} />
    </div>
  );
}
