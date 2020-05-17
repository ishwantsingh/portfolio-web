import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import FloatingSocials from "./components/socials/FloatingSocials";
import MainBody from "./components/mainBody/MainBody";
import NavContainer from "./components/navigation/NavContainer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <FloatingSocials />
          <Switch>
            <Route exact path="/">
              <MainBody />
            </Route>{" "}
          </Switch>
          <NavContainer />
        </Container>
      </Router>
    );
  }
}

export default App;
