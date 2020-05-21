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
  background-color: #ffffff;
  font-size: 7rem;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: space-between;
  .imageDiv {
    width: 35%;
    height: 40vh;
    display: flex;
    justify-content: flex-start;
    align-self: flex-end;
    margin: 0 0 1.5rem 1.5rem;
  }
  .image {
    width: 25vw;
    height: 35vh;
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
  }
  .text {
    width: 50%;
    height: 50rem;
    display: flex;
    justify-self: center;
    justify-content: center;
    align-self: center;
    margin-right: 1.5%;
  }
  h1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 3.5rem;
    letter-spacing: 0.015em;
  }
  .name-div {
    width: 100%;
    display: flex;
    //  align-self: center;
    flex-direction: column;
    justify-self: center;
    // border: 1px solid #e1e0e0;
    // border-radius: 10px;
    // padding: 2rem;
    // margin-left: 10rem;
    margin-top: 10rem;
  }
  .about-div {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-self: flex-start;
    // margin: auto;
    // padding: 2rem;
    // border: 1px solid #e1e0e0;
    // border-radius: 10px;
    // margin-left: 10rem;
    font-size: 1.7rem;
    color: #6e6e6e;
    margin-top: 2rem;
    letter-spacing: 0;
    font-weight: 300;
    line-height: 1.7;
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
            <div className="name-div">
              <div id="texts">Hello,</div>
              <div id="texts">My name is Ishwant</div>
              {/* <div id="texts">.</div> */}
            </div>
            <div id="texts" className="about-div">
              I’m a Fullstack Develop from India. I create beautiful, intuitive
              online experiences through solid research, thoughtful design and
              accessible code. I bleed Design, Code and Paint!
            </div>
          </h1>
        </div>
      </Container>
    );
  }
}

export default About;
