import React from "react";
import { Link } from "@reach/router";
import Routes from "./containers/Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="punk">Punk</Link> <Link to="reggae">Reggae</Link>{" "}
      <Link to="classical">Classical</Link>
      <Routes />
    </div>
  );
}

export default App;
