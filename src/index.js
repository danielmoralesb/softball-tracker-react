import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

import Header from "./components/header";
import Score from "./components/score";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  return (
    <section className="game">
      <Header />
      <Score />
    </section>
  );
}

root.render(<App />);
