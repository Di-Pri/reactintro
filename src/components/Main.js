import React from "react";
import List from "./List";

export default function Main({ cards, onFormSubmit, onCardMove, onCardDelete }) {
  return (
    <main>
      <List
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        onFormSubmit={onFormSubmit}
        cards={cards.filter((c) => c.list === "todo")}
        header="ToDo"
      />
      <List
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        onFormSubmit={onFormSubmit}
        cards={cards.filter((c) => c.list === "doing")}
        header="Doing"
      />
      <List
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        onFormSubmit={onFormSubmit}
        cards={cards.filter((c) => c.list === "done")}
        header="Done"
      />
    </main>
  );
}
