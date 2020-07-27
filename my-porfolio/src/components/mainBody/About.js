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
    height: 69vh;
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
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-self: center;
    margin-top: 6.5rem;
    font-weight: 600;
    font-size: 3.5rem;
    font-family: "Prata", serif;
    color: #393939;
  }
  .about-div {
    width: 92%;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-self: flex-start;
    font-size: 1.6rem;
    color: #6e6e6e;
    margin-top: 0rem;
    letter-spacing: 0;
    font-weight: 200;
    line-height: 1.6;
    font-family: "Roboto", serif;
  }
  .scroll-down-but {
    width: 15rem;
    background: linear-gradient(259.07deg, #daf8ff 4.07%, #b2eaf8 100%);
    background-color: #daf8ff;
    border-radius: 8px;
    font-family: "Nunito", sans-serif;
    box-shadow: 0px 10px 24px #e5f4f5;
    line-height: 35px;
    background-color: #daf8ff;
    color: #00b1da;
    font-size: 14px;
    gap: normal;
    margin-top: 3rem;
    padding: 0.25% 1.5%;
    text-align: center;
    transition: all linear 0.2s;
    text-decoration: none;
    font-weight: 300;
    cursor: pointer;
    border: 2px solid #daf8ff;
    outline: none;
  }
  .scroll-down-but:hover {
    margin-top: 2.75rem;
    box-shadow: 3px 11px 24px #e5f4f5;
    border: 2px solid #daf8ff;
  }
  #texts span:after {
    content: "";
    height: 17px;
    width: 757px;
    overflow: hidden;
    background-image: url(${stroke});
    background-repeat: no-repeat;
    background-size: initial;
    background-position: center;
    margin-right: 4%;
    margin-top: -25px;
    display: block;
    z-index: -1;
  }
  @media (max-width: 1500px) {
    font-size: 5.5rem;
    .text {
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: 3rem;
    }
    .about-div {
      font-size: 1.4rem;
    }
    .name-div {
      height: 11rem;
      font-size: 3rem;
    }
    #texts span:after {
      width: 680px;
    }
    .image {
      width: 22vw;
      height: 32vh;
    }
    .scroll-down-but {
      width: 12rem;
      font-size: 12.5px;
    }
  }
  @media (max-width: 1280px) and (max-height: 650px) {
    .scroll-down-but {
      display: none;
    }
    .name-div {
      height: 8rem;
    }
  }
  @media (max-width: 1330px) {
    font-size: 5rem;
    .text {
      margin-bottom: 4.2rem;
    }
    h1 {
      font-size: 2.6rem;
    }
    .name-div {
      height: 10rem;
      font-size: 2.6rem;
    }
    .about-div {
      line-height: 1.3;
    }
    #texts span:after {
      height: 14px;
      width: 612px;
    }
    .scroll-down-but {
      width: 12rem;
      font-size: 12.5px;
      margin-top: 2rem;
    }
    .scroll-down-but:hover {
      margin-top: 1.75rem;
    }
  }
  @media (max-width: 1110px) {
    .scroll-down-but {
      display: none;
    }
  }
  @media only screen and (max-width: 950px) {
    // height: calc(100% - 5rem);
    margin-top: -5rem;
    flex-direction: column-reverse;
    background-image: none;
    // background-position: left bottom;
    // background-size: cover;
    #texts span:after {
      width: 0;
      height: 0;
    }
    .imageDiv {
      align-self: center;
      height: 30vh;
      width: 60vw;
      margin: 0;
      margin-bottom: 5rem;
    }
    .image {
      height: 30vh;
      width: 60vw;
    }
    .text {
      margin-top: 5rem;
      width: 100vw;
      height: 50vh;
      margin-bottom: 0;
    }
    h1 {
      width: 100vw;
      align-items: center;
      text-align: left;
      margin: 0;
    }
    #texts {
      height: 6vh;
    }
    .about-div {
      margin-top: 2rem !important;
      width: 88vw;
      height: 19vh !important;
      margin: 0 auto;
      font-size: 1.4rem;
    }
    .name-div {
      width: 88vw;
      height: 10rem;
      margin: 0 auto;
      font-size: 2.4rem;
      justify-content: flex-end;
    }
    .scroll-down-but {
      display: flex;
      align-self: center;
      justify-self: center;
      justify-content: center;
      width: 88vw;
      margin-top: 1rem;
      text-align: center;
      font-size: 1.35rem;
      line-height: 40px;
    }
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
    this.timeline.timeScale(1.5).reverse();
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
                my name is <span>Ishwant</span>
              </div>
            </div>
            <div id="texts" className="about-div">
              I’m a Fullstack Developer from India. I create beautiful,
              intuitive online experiences through solid research, thoughtful
              design and accessible code. I bleed Design, Code and Paint!
            </div>
            <button
              className="scroll-down-but"
              id="texts"
              onClick={(e) => this.changePage(e, "/projects")}
            >
              Scroll down for more
            </button>
          </h1>
        </div>
      </Container>
    );
  }
}

export default About;
