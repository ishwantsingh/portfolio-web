import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/all";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1.5px solid #e1e0e0;
  border-left: 1.5px solid #e1e0e0;
  background-color: white;
  font-size: 7rem;
`;

const startState = { autoAlpha: 0, y: -50 };

const Projects = props => (
  <Transition
    unmountOnExit
    in={props.show}
    timeout={{ enter: 750, exit: 150 }}
    onEnter={node => TweenLite.set(node, startState)}
    addEndListener={(node, done) => {
      TweenLite.to(node, 2, {
        autoAlpha: props.show ? 1 : 0,
        y: props.show ? 0 : 50,
        onComplete: done
      });
    }}
  >
    <Container>Projects</Container>
  </Transition>
);

export default Projects;
