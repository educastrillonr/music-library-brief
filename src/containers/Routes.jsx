import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import AlbumsContainer from "../containers/AlbumsContainer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="punk" />
        <AlbumsContainer path=":genre" />
      </Router>
    );
  }
}

export default Routes;
