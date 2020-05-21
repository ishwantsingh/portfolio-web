import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import history from "./history";
// import { Transition, TransitionGroup } from "react-transition-group";

import {
  AboutTimeline,
  ProjectsTimeline,
  SkillsTimeline,
  HobbiesTimeline,
  ChangePage,
} from "./components/animations/Timelines";
// import { play, exit } from "./components/animations/Timelines";
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

  AboutCompletePromise = new Promise(function (resolve, reject) {
    AboutTimeline();
    resolve("animation done");
    reject("oops!");
  });
  ProjectsCompletePromise = new Promise(function (resolve) {
    ProjectsTimeline();
    resolve("animation done");
  });
  SkillsCompletePromise = new Promise(function (resolve) {
    SkillsTimeline();
    resolve("animation done");
  });
  HobbiesCompletePromise = new Promise(function (resolve) {
    HobbiesTimeline();
    resolve("animation done");
  });

  changePage = function (e) {
    const isScrollingDown = Math.sign(e.deltaY);
    if (isScrollingDown === -1 && history.location.pathname === "/projects") {
      // this.AboutCompletePromise.then(() =>
      history.replace("/");
      // );

      // ChangePage(e, "/");
    } else if (isScrollingDown === 1 && history.location.pathname === "/") {
      // this.ProjectsCompletePromise.then(
      history.replace("/projects");
      // );

      // ChangePage(e, "/projects");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/projects"
    ) {
      // this.SkillsCompletePromise.then(
      history.replace("/skills");
      // );
      // ChangePage(e, "/skills");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/skills"
    ) {
      // this.HobbiesCompletePromise.then(
      history.replace("/hobbies");
      // );

      // ChangePage(e, "/hobbies");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/skills"
    ) {
      // this.ProjectsCompletePromise.then(
      history.replace("/projects");
      // );
      // ChangePage(e, "/projects");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/hobbies"
    ) {
      // this.SkillsCompletePromise.then(
      history.replace("/skills");
      // );
      // ChangePage(e, "/skills");
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
            <About AboutTimeline={AboutTimeline} />
          </Route>
          <Route path="/projects">
            <Projects ProjectsTimeline={ProjectsTimeline} />
          </Route>
          <Route path="/skills">
            <Skills SkillsTimeline={SkillsTimeline} />
          </Route>
          <Route path="/hobbies">
            <Hobbies HobbiesTimeline={HobbiesTimeline} />
          </Route>
        </Switch>
        <NavContainer />
      </Container>
    );
  }
}

export default App;
