import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/bgImage.svg";
import SvgDevProd from "../animations/devProd.js";
// import { Transition } from "react-transition-group";
import { TimelineMax, Power1 } from "gsap/all";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // border-right: 1px solid #e1e0e0;
  background-color: #ffffff;
  font-size: 7rem;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
  .imageDiv {
    width: 35%;
    height: 40vh;
    display: flex;
    justify-content: flex-start;
    align-self: flex-end;
    margin: 0 0 9rem 3rem;
  }
  .image {
    width: 25vw;
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
  }
  .text {
    display: flex;
    justify-self: center;
    align-self: center;
    margin-right: 1.5%;
  }
  .with--accent {
    color: #ff5252;
    font-weight: 400;
  }
  h1 {
    font-size: 4rem;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.03em;
  }
`;

// DAF8FF f9f9f9

class About extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from("#content-1", 1, {
        autoAlpha: 0,
        delay: 0,
        ease: Power1.easeIn,
      })
      .staggerFrom(
        "#texts",
        0.475,
        { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 2.65 },
        0.155
      );

    this.timeline.play();
  }
  render() {
    return (
      <Container id="content-1">
        <div className="imageDiv">
          <SvgDevProd className="image" />
        </div>
        <div className="text">
          <h1>
            <div id="texts">Hey!</div>
            <div id="texts" className="with--accent">
              I'm Ishwant Singh.
            </div>
            <div id="texts">I Design, Code and Paint!</div>
            <div id="texts">
              <span className="with--accent">Scroll down</span> for more.
            </div>
          </h1>
        </div>
      </Container>
    );
  }
}

export default About;
