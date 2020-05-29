import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap";
import history from "../../history";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // border-right: 1.5px solid #e1e0e0;
  background-color: #ffffff;
  font-size: 7rem;
`;

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline.from("#content-3", 1.5, {
      autoAlpha: 0,
      delay: 0,
      ease: Power1.easeIn,
    });
    this.timeline.play();
  }

  changePage = (e, destination) => {
    e.preventDefault();
    this.timeline.reverse();
    const timelineDuration = this.timeline.duration() * 1000;
    setTimeout(() => {
      history.push(destination);
    }, timelineDuration);
  };

  render() {
    return (
      <Container id="content-3">
        <div>Skills</div>
      </Container>
    );
  }
}
export default Skills;
