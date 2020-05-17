import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainBody from "./components/mainBody/MainBody";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <MainBody />
        </Route>
      </Router>
    );
  }
}

export default App;
