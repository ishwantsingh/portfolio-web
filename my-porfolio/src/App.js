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
  constructor(props) {
    super(props);
    this.aboutChild = React.createRef();
    this.projectsChild = React.createRef();
    this.skillsChild = React.createRef();
    this.hobbiesChild = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("wheel", this.throttle(this.scrollChangePage, 900));
  }

  scrollChangePage = (e) => {
    const isScrollingDown = Math.sign(e.deltaY);
    if (isScrollingDown === -1 && history.location.pathname === "/projects") {
      this.projectsChild.current.changePage(e, "/");
    } else if (isScrollingDown === 1 && history.location.pathname === "/") {
      this.aboutChild.current.changePage(e, "/projects");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/projects"
    ) {
      this.projectsChild.current.changePage(e, "/skills");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/skills"
    ) {
      this.skillsChild.current.changePage(e, "/hobbies");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/skills"
    ) {
      this.skillsChild.current.changePage(e, "/projects");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/hobbies"
    ) {
      this.hobbiesChild.current.changePage(e, "/skills");
    }
  };

  throttle = (func, limit) => {
    let inThrottle;
    return function () {
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
            <About ref={this.aboutChild} />
          </Route>
          <Route path="/projects">
            <Projects ref={this.projectsChild} />
          </Route>
          <Route path="/skills">
            <Skills ref={this.skillsChild} />
          </Route>
          <Route path="/hobbies">
            <Hobbies ref={this.hobbiesChild} />
          </Route>
        </Switch>
        <NavContainer />
      </Container>
    );
  }
}

export default App;
