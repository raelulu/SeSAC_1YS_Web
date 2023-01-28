import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Coffee from "./components/Menu/Coffee";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Coffee />
      </main>
    </Fragment>
  );
}

export default App;
