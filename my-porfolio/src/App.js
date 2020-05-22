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
  getAboutPageChange = function (e, destination) {
    this.aboutChild.current.changePage(e, destination);
  };
  getProjectsChange = function (e, destination) {
    this.projectsChild.current.changePage(e, destination);
  };
  getSkillsChange = function (e, destination) {
    this.skillsChild.current.changePage(e, destination);
  };
  getHobbiesChange = function (e, destination) {
    this.hobbiesChild.current.changePage(e, destination);
  };
  // AboutCompletePromise = new Promise(function (resolve, reject) {
  //   this.getPageChangeData();
  //   resolve("animation done");
  //   reject("oops!");
  // });
  // ProjectsCompletePromise = new Promise(function (resolve) {
  //   ProjectsTimeline();
  //   resolve("animation done");
  // });
  // SkillsCompletePromise = new Promise(function (resolve) {
  //   SkillsTimeline();
  //   resolve("animation done");
  // });
  // HobbiesCompletePromise = new Promise(function (resolve) {
  //   HobbiesTimeline();
  //   resolve("animation done");
  // });

  scrollChangePage = function (e) {
    const isScrollingDown = Math.sign(e.deltaY);
    if (isScrollingDown === -1 && history.location.pathname === "/projects") {
      // this.AboutCompletePromise.then(() =>
      // history.replace("/");
      // );
      document.getElementById("to-about-but").click();
      // ChangePage(e, "/");
    } else if (isScrollingDown === 1 && history.location.pathname === "/") {
      // this.ProjectsCompletePromise.then(
      document.getElementById("to-projects-but").click();
      //  return this.getPageChangeData(e, "/projects");

      //  history.replace("/projects");
      // );

      // ChangePage(e, "/projects");
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/projects"
    ) {
      // this.SkillsCompletePromise.then(
      // history.replace("/skills");
      // );
      // ChangePage(e, "/skills");
      document.getElementById("to-skills-but").click();
    } else if (
      isScrollingDown === 1 &&
      history.location.pathname === "/skills"
    ) {
      // this.HobbiesCompletePromise.then(
      // history.replace("/hobbies");
      // );
      document.getElementById("to-hobbies-but").click();
      // ChangePage(e, "/hobbies");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/skills"
    ) {
      // this.ProjectsCompletePromise.then(
      // history.replace("/projects");
      // );
      document.getElementById("to-projects-but").click();
      // ChangePage(e, "/projects");
    } else if (
      isScrollingDown === -1 &&
      history.location.pathname === "/hobbies"
    ) {
      // this.SkillsCompletePromise.then(
      // history.replace("/skills");
      // );
      document.getElementById("to-skills-but").click();
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
        <button
          id="to-about-but"
          onClick={(e) => this.getProjectsChange(e, "/")}
          style={{ display: "none" }}
        >
          Click
        </button>{" "}
        <button
          id="to-projects-but"
          onClick={(e) => this.getAboutPageChange(e, "/projects")}
          style={{ display: "none" }}
        >
          Click
        </button>
        <button
          id="to-skills-but"
          onClick={(e) => this.getAboutPageChange(e, "/skills")}
          style={{ display: "none" }}
        >
          Click
        </button>{" "}
        <button
          id="to-hobbies-but"
          onClick={(e) => this.getAboutPageChange(e, "/hobbies")}
          style={{ display: "none" }}
        >
          Click
        </button>
        <Switch>
          <Route exact path="/">
            <About AboutTimeline={AboutTimeline} ref={this.aboutChild} />
          </Route>
          <Route path="/projects">
            <Projects
              ProjectsTimeline={ProjectsTimeline}
              ref={this.projectsChild}
            />
          </Route>
          <Route path="/skills">
            <Skills SkillsTimeline={SkillsTimeline} ref={this.skillsChild} />
          </Route>
          <Route path="/hobbies">
            <Hobbies
              HobbiesTimeline={HobbiesTimeline}
              ref={this.hobbiesChild}
            />
          </Route>
        </Switch>
        <NavContainer />
      </Container>
    );
  }
}

export default App;
