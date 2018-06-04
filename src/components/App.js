import React, { Component } from "react";

import {
  Router,
  Route
} from "react-router";

let msg = `搭建成功`;
class App extends Component {
  render() {
    return (
      <div>
        <h1>{msg}</h1>
      </div>
    );
  }
}

export default App;
