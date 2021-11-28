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

  function clicked(e) {
    setCards(
      cards.concat({
        title: "OMG, did that just happen",
        list: "todo",
        added: Date.now(),
        id: Math.random(),
        color: "lightpink",
        assignedTo: ["di"],
      })
    );
  }

  return (
    <div className="App">
      <Nav />
      <Main cards={cards} />
      <button onClick={clicked}>Click me</button>
    </div>
  );
}
