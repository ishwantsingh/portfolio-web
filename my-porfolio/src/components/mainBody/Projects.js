import React from "react";
import styled from "styled-components";
// import { Transition } from "react-transition-group";
import { TimelineMax, Power1 } from "gsap/all";

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

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline.from("#content", 1, {
      autoAlpha: 0,
      delay: 0,
      ease: Power1.easeIn,
    });
    this.timeline.play();
  }

  // changePage = (e, destination) => {
  //   e.preventDefault();
  //   this.timeline.reverse();
  //   const timelineDuration = this.timeline.duration() * 1000;
  //   setTimeout(() => {
  //     this.props.history.push(destination);
  //   }, timelineDuration);
  // };

  render() {
    return <Container id="content">Projects</Container>;
  }
}

export default Projects;
