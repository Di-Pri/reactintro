import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

function Nav() {
  return <nav>Nav</nav>;
}

function Main() {
  return (
    <main>
      <List header="ToDo" />
      <List header="Doing" />
      <List header="Done" />
    </main>
  );
}

function List(props) {
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>
        <Card />
        <Card />
      </ul>
      <Form />
    </section>
  );
}

function Card() {
  return (
    <li>
      <h3>Header</h3>
      <Button />
    </li>
  );
}

function Button() {
  return <button>Click me</button>;
}

function Form() {
  return (
    <form>
      <input />
      <Button />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
