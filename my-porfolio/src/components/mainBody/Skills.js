import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap";
import history from "../../history";

import avatar from "../../assets/avatar.svg";
import SvgCoolBg from "../animations/cool-Bg.js";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  font-size: 7rem;
  .imageDiv {
    width: 35%;
    height: 40vh;
    display: flex;
    justify-content: flex-start;
    align-self: flex-end;
    margin: 0 0 1.5rem 1.5rem;
  }
  .bgImage {
    position: absolute;
    width: 150%;
    height: 150%;
    top: -50%;
    left: -50%;
    z-index: -1;
    // width: 25vw;
    // height: 35vh;
    // display: flex;
    // justify-self: flex-start;
    // align-self: flex-start;
  }
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
        <div className="imageDiv">
          <SvgCoolBg className="bgImage" />
        </div>
        <div>Skills =></div>
        <img src={avatar} alt="avatar" />
      </Container>
    );
  }
}
export default Skills;
