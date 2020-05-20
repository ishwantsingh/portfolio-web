import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import history from "./history";

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
  componentDidMount() {
    window.addEventListener("wheel", this.throttle(this.changePage, 900));
  }

  changePage = function(e) {
    const isScrollingDown = Math.sign(e.deltaY);
    if (isScrollingDown === -1 && history.location.pathname === "/projects") {
      history.replace("/");
    } else if (isScrollingDown === 1 && history.location.pathname === "/") {
      history.replace("/projects");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/projects"
    ) {
      history.replace("/skills");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/skills"
    ) {
      history.replace("/hobbies");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/skills"
    ) {
      history.replace("/projects");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/hobbies"
    ) {
      history.replace("/skills");
    }
  };

  throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments; //arguments recieved by the function which probably include the event itself
      const context = this; //binds this
      if (!inThrottle) {
        func.apply(context, args); //takes this and the arguments and applies it onto the function, therefore the function now has access to the arguments of the parent function that is EVENT is accessible to func now.
        // in other implementations the event wasn't passed from throttle to the function, but in this using apply we have passed the event argument from throttle to the function without mentioning it explicitly.
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  render() {
    return (
      <Container>
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
    );
  }
}

export default App;
