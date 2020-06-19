import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap";
import history from "../../history";

import backend from "../../assets/backend.svg";
import web from "../../assets/web.svg";
import ui from "../../assets/ui.svg";
import mobile from "../../assets/mobile.svg";
import SvgCoolBg from "../animations/cool-Bg.js";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: right;
  background-color: #ffffff;
  font-size: 7rem;
  z-index: 1;
  .hide-content {
    display: none !important;
  }
  #skills {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    #skill-div {
      width: 25vw;
      display: flex;
      flex-direction: row;
      font-size: 1.8rem;
      align-items: center;
      justify-content: flex-end;
      // vertical-align: middle;
      text-align: left;
      .skill-img {
        // width: 13vw;
        // height: 6.5vw;
        width: 17vw;
        height: 13vh;
      }
      span {
        font-weight: normal;
        text-decoration: none;
      }
      .skill-name {
        z-index: 1;
        margin-right: 1%;
      }
      .skill-name:hover {
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  // .imageDiv {
  //   width: 35%;
  //   height: 40vh;
  //   display: flex;
  //   justify-content: flex-start;
  //   align-self: flex-end;
  //   margin: 0 0 1.5rem 1.5rem;
  // }
  .bgImage {
    position: absolute;
    // width: 150%;
    // height: 150%;
    top: 0%;
    left: -15%;
    z-index: -1;
    display: flex;
    width: 100%;
    height: 100%;
    // width: 25vw;
    // height: 35vh;
    // display: flex;
    // justify-self: flex-start;
    // align-self: flex-start;
  }
  .info-blob {
    width: 60vw;
    height 91vh;
    filter: drop-shadow(0px 6px 15px #696969) blur(0.5px);;
  }
  .info-div {
    width: 52vw;
    height 75vh;
    position: absolute;
    top: -5vh;
    right: 25vw;
    background-color: white;
    border-left: 4px solid #1B1C1D;
    // border-radius: 15px;
    // box-shadow: 0px 10px 24px #808080;
    // box-shadow: 0px 1px 2px #808080;
  }
  .info-div-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 52vw;
    height 78vh;
    position: absolute;
    top: 11vh;
    right: 35vw;
    padding: 0 0 0 5%;
    font-size: 2.5rem;
    background-color: white;
    border-left: 4px solid #1B1C1D;
    // border-left: 1px solid #E1E0E0;
    border-top: 1px dashed #E1E0E0;
    border-bottom: 1px dashed #E1E0E0;
    border-top-left-radius: 6px 1.5px; 
    border-bottom-left-radius: 6px 1.5px;
  }
`;

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Heading",
      content1: "Content 1",
      content2: "Content 2",
      content3: "Content 3",
      content4: "Content 4",
      ui: [
        "Website Wireframing",
        "Figma",
        "Svg Animation",
        "Css Animation",
        "User research",
        "Paper prototyping",
      ],
      mobile: [
        "React native",
        "Expo",
        "Redux",
        "Styled-Components",
        "React-Navigation",
      ],
      frontend: [
        "Html5",
        "Css3",
        "JavaScript",
        "React.js",
        "Redux",
        "Styled-Components",
      ],
      backend: [
        "Node.js",
        "Express",
        "SQL (mySQL)",
        "NoSQL (Firebase)",
        "REST",
      ],
    };
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from(".info-div-2", 0.5, {
        scaleX: 0,
        transformOrigin: "right",
        ease: Power1.easeIn,
        delay: 1.1,
      })
      .staggerFrom(
        ".info-div-2 > div",
        0.3,
        { autoAlpha: 0, x: -40, ease: Power1.easeOut, delay: 0.1 },
        0.1
      )
      .staggerFrom(
        "#skill-div",
        0.5,
        { autoAlpha: 0, x: -40, ease: Power1.easeOut, delay: 0.1 },
        0.1
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

  hideDesign = (e) => {
    e.preventDefault();
    console.log("target", e.target.parentNode.children[1]);
    e.target.parentNode.children[2].classList.add("hide-content");
  };

  showDesign = (e, skill) => {
    e.preventDefault();
    // e.target.parentNode.children[2].classList.remove("hide-content");
    for (let i = 0; i <= 4; i++) {
      console.log("i", i, skill);
      console.log(this.state[skill]);
      e.target.parentNode.parentNode.parentNode.children[0].children[
        i
      ].innerHTML = this.state[skill][i];
    }
  };

  render() {
    return (
      <Container>
        <SvgCoolBg className="bgImage" />
        <div id="content-3">
          <div className="info-div-2">
            <div>{this.state.heading}</div>
            <div>{this.state.content1}</div>
            <div>{this.state.content2}</div>
            <div>{this.state.content3}</div>
            <div>{this.state.content4}</div>
          </div>
          <div id="skills">
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={(e) => this.showDesign(e, "ui")}
                // onMouseLeave={this.hideDesign}
              >
                ui/ux
              </span>
              <span>•</span>
              <img src={ui} alt="ui" className="skill-img" />
            </div>
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={(e) => this.showDesign(e, "mobile")}
                // onMouseLeave={this.hideDesign}
              >
                mobile
              </span>
              <span>•</span>
              <img src={mobile} alt="mobile" className="skill-img" />
            </div>
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={(e) => this.showDesign(e, "frontend")}
                // onMouseLeave={this.hideDesign}
              >
                frontend
              </span>
              <span>•</span>
              <img src={web} alt="frontend" className="skill-img" />
            </div>
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={(e) => this.showDesign(e, "backend")}
                // onMouseLeave={this.hideDesign}
              >
                backend
              </span>
              <span>•</span>
              <img src={backend} alt="backend" className="skill-img" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Skills;
