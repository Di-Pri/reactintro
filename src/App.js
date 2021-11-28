import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://kea2semester-d82c.restdb.io/rest/kanban", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "603537b05ad3610fb5bb658d",
        "cache-control": "no-cache",
      },
    })
      .then((e) => e.json())
      .then((data) => setCards(data));
  }, []);

  // [
  //   {
  //     title: "Make it dynamic",
  //     list: "todo",
  //     added: 2345345345,
  //     _id: 1,
  //     color: "lightpink",
  //     assignedTo: ["di"],
  //   },
  //   {
  //     title: "Make it dynamic",
  //     list: "todo",
  //     added: 2392376395,
  //     _id: 2,
  //     color: "lightblue",
  //     assignedTo: ["di", "ma"],
  //   },
  // ]

  function onFormSubmit(data) {
    console.log("form submited", data);
    setCards(cards.concat(data));
  }

  function onCardMove(_id, whereTo) {
    console.log(_id, whereTo);
    const nextCards = cards.map((card) => {
      if (card._id === _id) {
        card.list = whereTo;
      }
      return card;
    });
    setCards(nextCards);
  }

  function onCardDelete(_id) {
    const nextCards = cards.filter((card) => card._id !== _id);
    setCards(nextCards);
  }

  return (
    <div className="App">
      <Nav />
      <Main onCardMove={onCardMove} onCardDelete={onCardDelete} onFormSubmit={onFormSubmit} cards={cards} />
      {cards.length === 0 && <h2>Loading</h2>}
    </div>
  );
}
