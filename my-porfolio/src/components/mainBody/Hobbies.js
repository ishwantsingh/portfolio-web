import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import history from "../../history";

import SvgCoolBg from "../animations/cool-Bg.js";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // border-right: 1.5px solid #e1e0e0;
  background-color: white;
  font-size: 7rem;
  .bgImage {
    display: flex;
    // position: absolute;
    width: 100%;
    height: 100%;
    // top: -50%;
    // left: -50%;
    // z-index: -1;
    // width: 25vw;
    // height: 35vh;
    // display: flex;
    // justify-self: flex-start;
    // align-self: flex-start;
  }
`;

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    // this.timeline.from("#content-4", 1.5, {
    //   autoAlpha: 0,
    //   delay: 0,
    //   ease: Power1.easeIn,
    // });
    // this.timeline.play();
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
      <Container id="content-4">
        <SvgCoolBg className="bgImage" />
      </Container>
    );
  }
}
export default Hobbies;
