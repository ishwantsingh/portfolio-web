import React from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";
import styled from "styled-components";
import history from "./history";

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
  // state = {
  //   loading: false
  // };
  componentDidMount() {
    window.addEventListener(
      "wheel",
      this.throttle(function(e) {
        const isScrollingDown = Math.sign(e.deltaY);
        if (
          isScrollingDown === -1 &&
          history.location.pathname == "/projects"
        ) {
          console.log("scrolling up", history);
          history.replace("/");
        } else if (isScrollingDown === 1 && history.location.pathname == "/") {
          console.log("scrolling down");
          history.replace("/projects");
        } else if (
          isScrollingDown === 1 &&
          history.location.pathname == "/projects"
        ) {
          console.log("scrolling down");
          history.replace("/skills");
        } else if (
          isScrollingDown === 1 &&
          history.location.pathname == "/skills"
        ) {
          console.log("scrolling down");
          history.replace("/hobbies");
        } else if (
          isScrollingDown === -1 &&
          history.location.pathname == "/skills"
        ) {
          console.log("scrolling up");
          history.replace("/projects");
        } else if (
          isScrollingDown === -1 &&
          history.location.pathname == "/hobbies"
        ) {
          console.log("scrolling up");
          history.replace("/skills");
        }
      }, 700)
    );
  }

  throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // throttleFunction = function(e) {
  //   // If setTimeout is already scheduled, no need to do anything
  //   let timerId;
  //   if (timerId) {
  //     return;
  //   }
  //   const isScrollingDown = Math.sign(e.deltaY);
  //   // Schedule a setTimeout after delay seconds
  //   timerId = setTimeout(function() {
  //     //    function() {
  //     if (isScrollingDown === -1 && history.location.pathname == "/projects") {
  //       console.log("scrolling up", history);
  //       history.replace("/");
  //     } else if (isScrollingDown === 1 && history.location.pathname == "/") {
  //       console.log("scrolling down");
  //       history.replace("/projects");
  //     } else if (
  //       isScrollingDown === 1 &&
  //       history.location.pathname == "/projects"
  //     ) {
  //       console.log("scrolling down");
  //       history.replace("/skills");
  //     } else if (
  //       isScrollingDown === 1 &&
  //       history.location.pathname == "/skills"
  //     ) {
  //       console.log("scrolling down");
  //       history.replace("/hobbies");
  //     } else if (
  //       isScrollingDown === -1 &&
  //       history.location.pathname == "/skills"
  //     ) {
  //       console.log("scrolling up");
  //       history.replace("/projects");
  //     } else if (
  //       isScrollingDown === -1 &&
  //       history.location.pathname == "/hobbies"
  //     ) {
  //       console.log("scrolling up");
  //       history.replace("/skills");
  //     }
  //     //     }

  //     // Once setTimeout function execution is finished, timerId = undefined so that in <br>
  //     // the next scroll event function execution can be scheduled by the setTimeout
  //     timerId = undefined;
  //   }, 1500);
  // };

  // debounceFunction = function(e) {
  //   let timerId;
  //   // Cancels the setTimeout method execution
  //   clearTimeout(timerId);

  //   // Executes the func after delay time.
  //   const isScrollingDown = Math.sign(e.deltaY);
  //   timerId = setTimeout(function() {
  //     if (isScrollingDown === -1 && history.location.pathname == "/projects") {
  //       console.log("scrolling up", history);
  //       history.replace("/");
  //     } else if (isScrollingDown === 1 && history.location.pathname == "/") {
  //       console.log("scrolling down");
  //       history.replace("/projects");
  //     } else if (
  //       isScrollingDown === 1 &&
  //       history.location.pathname == "/projects"
  //     ) {
  //       console.log("scrolling down");
  //       history.replace("/skills");
  //     } else if (
  //       isScrollingDown === 1 &&
  //       history.location.pathname == "/skills"
  //     ) {
  //       console.log("scrolling down");
  //       history.replace("/hobbies");
  //     } else if (
  //       isScrollingDown === -1 &&
  //       history.location.pathname == "/skills"
  //     ) {
  //       console.log("scrolling up");
  //       history.replace("/projects");
  //     } else if (
  //       isScrollingDown === -1 &&
  //       history.location.pathname == "/hobbies"
  //     ) {
  //       console.log("scrolling up");
  //       history.replace("/skills");
  //     }
  //   }, 3000);
  // };

  // handleScroll(event) {
  //   let loading = false;
  //   const isScrollingDown = Math.sign(event.deltaY);
  //   console.log(isScrollingDown, "isScrollingDOwn");
  //   if (!loading) {
  //     loading = true;
  //     if (isScrollingDown === -1 && history.location.pathname == "/projects") {
  //       console.log("scrolling up", history);
  //       history.replace("/");
  //       loading = false;
  //     } else if (isScrollingDown === 1 && history.location.pathname == "/") {
  //       console.log("scrolling down");
  //       history.replace("/projects");
  //       loading = false;
  //     } else if (
  //       isScrollingDown === 1 &&
  //       history.location.pathname == "/projects"
  //     ) {
  //       console.log("scrolling down");
  //       history.replace("/skills");
  //       loading = false;
  //     } else if (
  //       isScrollingDown === 1 &&
  //       history.location.pathname == "/skills"
  //     ) {
  //       console.log("scrolling down");
  //       history.replace("/hobbies");
  //       loading = false;
  //     } else if (
  //       isScrollingDown === -1 &&
  //       history.location.pathname == "/skills"
  //     ) {
  //       console.log("scrolling up");
  //       history.replace("/projects");
  //       loading = false;
  //     } else if (
  //       isScrollingDown === -1 &&
  //       history.location.pathname == "/hobbies"
  //     ) {
  //       console.log("scrolling up");
  //       history.replace("/skills");
  //       loading = false;
  //     }
  //   }
  // }
  render() {
    return (
      //   <Router>
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
      // </Router>
    );
  }
}

export default App;
