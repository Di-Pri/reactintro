import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const cards = [
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
  ];
  return (
    <div className="App">
      <Nav />
      <Main cards={cards} />
    </div>
  );
}
