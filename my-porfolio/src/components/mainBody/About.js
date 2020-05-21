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
  .imageDiv {
    width: 35%;
    height: 40vh;
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    margin: 3rem 0 0 3rem;
  }
  .image {
    width: 25vw;
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
  }
`;

// DAF8FF f9f9f9

class About extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline.from("#content-1", 1, {
      autoAlpha: 0,
      delay: 0.95,
      ease: Power1.easeIn,
    });
    this.timeline.play();
  }
  render() {
    return (
      <Container id="content-1">
        <div className="imageDiv">
          <SvgDevProd className="image" />
        </div>
      </Container>
    );
  }
}

export default About;
