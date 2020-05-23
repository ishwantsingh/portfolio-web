import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import history from "../../history";

import bgImage from "../../assets/bgImage.svg";
import stroke from "../../assets/stroke.svg";
import SvgDevProd from "../animations/devProd.js";

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
  }
  h1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 3.5rem;
    letter-spacing: 0.01em;
    font-family: "Nunito", sans-serif;
    margin-left: 2.3%;
  }
  .name-div {
    width: 100%;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-self: center;
    margin-top: 6.5rem;
    font-weight: 700;
    font-size: 4rem;
  }
  .about-div {
    width: 92%;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-self: flex-start;
    font-size: 1.6rem;
    color: #6e6e6e;
    margin-top: 0.6rem;
    letter-spacing: 0;
    font-weight: 200;
    line-height: 1.6;
  }
  .scroll-down-but {
    width: 27%;
    background: linear-gradient(259.07deg, #daf8ff 4.07%, #b2eaf8 100%);
    background-color: #daf8ff;
    border-radius: 8px;
    font-family: "Nunito", sans-serif;
    box-shadow: 0px 10px 24px #e5f4f5;
    font-size: 1.4rem;
    line-height: 35px;
    background-color: #daf8ff;
    color: #00b1da;
    font-size: 14px;
    gap: normal;
    margin-top: 3rem;
    padding: 0.25% 1.5%;
    text-align: center;
    transition: all linear 0.3s;
    text-decoration: none;
    font-weight: 300;
    cursor: pointer;
  }
  .scroll-down-but:hover {
    margin-top: 2.75rem;
    box-shadow: 3px 11px 24px #e5f4f5;
    border: 2px solid #daf8ff;
  }
  #texts span:after {
    content: "";
    height: 22px;
    overflow: hidden;
    background-image: url(${stroke});
    background-repeat: no-repeat;
    background-size: initial;
    display: block;
    z-index: -1;
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
        { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0.5 },
        0.155
      );
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
      <Container id="content-1">
        <div className="imageDiv">
          <SvgDevProd className="image" />
        </div>
        <div className="text">
          <h1>
            <div className="name-div">
              <div id="texts">Hello,</div>
              <div id="texts">
                My name is <span>Ishwant</span>
              </div>
            </div>
            <div id="texts" className="about-div">
              I’m a Fullstack Develop from India. I create beautiful, intuitive
              online experiences through solid research, thoughtful design and
              accessible code. I bleed Design, Code and Paint!
            </div>
            <a
              className="scroll-down-but"
              id="texts"
              onClick={(e) => this.changePage(e, "/projects")}
            >
              Scroll down for more
            </a>
          </h1>
        </div>
      </Container>
    );
  }
}

export default About;
