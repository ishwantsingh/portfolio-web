import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import FloatingSocials from "./components/socials/FloatingSocials";
import About from "./components/mainBody/About";
import Projects from "./components/mainBody/Projects";
import Skills from "./components/mainBody/Skills";
import Hobbies from "./components/mainBody/Hobbies";
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
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
          </Switch>
          <NavContainer />
        </Container>
      </Router>
    );
  }
}

export default App;
