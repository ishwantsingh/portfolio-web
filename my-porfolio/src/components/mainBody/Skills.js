import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap";
import history from "../../history";

import ui from "../../assets/ui.svg";
import web from "../../assets/web.svg";
import design from "../../assets/design.svg";
import mobile from "../../assets/mobile.svg";
import SvgCoolBg from "../animations/cool-Bg.js";
import prodBlob from "../../assets/prod-blob.svg";
import uiBlob from "../../assets/ui-blob.svg";
import mobileBlob from "../../assets/mobile-blob.svg";
import webBlob from "../../assets/web-blob.svg";

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
    // border: 2px solid #e1e0e0;
    border-radius: 15px;
    // box-shadow: 0px 10px 24px #808080;
    // box-shadow: 0px 1px 2px #808080;
  }
  .prod  {
    position: absolute;
    top: -15vh;
    right: 20vw;
  }
  .ui {
    position: absolute;
    top: -33.5vh;
    right: 20vw;
  }
  .mobile {
    position: absolute;
    top: -52vh;
    right: 20vw;
  }
  .web {
    position: absolute;
    top: -70vh;
    right: 20vw;
  }
`;

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      // .from("#content-3", 1.5, {
      //   autoAlpha: 0,
      //   delay: 2,
      //   ease: Power1.easeIn,
      // })
      .staggerFrom(
        "#skill-div",
        0.5,
        { autoAlpha: 0, x: -40, ease: Power1.easeOut, delay: 1.5 },
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

  showDesign = (e) => {
    e.preventDefault();
    e.target.parentNode.children[2].classList.remove("hide-content");
  };

  render() {
    return (
      <Container>
        {/* <div className="imageDiv"> */}
        <SvgCoolBg className="bgImage" />
        {/* </div> */}
        <div id="content-3">
          <div id="skills">
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={this.showDesign}
                onMouseLeave={this.hideDesign}
              >
                product
              </span>
              <span>•</span>
              {/* <img
                src={prodBlob}
                alt="blob"
                className="prod info-blob hide-content"
              /> */}
              <div className="info-div"></div>
              <img src={design} alt="design" className="skill-img" />
            </div>
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={this.showDesign}
                onMouseLeave={this.hideDesign}
              >
                ui/ux
              </span>
              <span>•</span>
              {/* <img
                src={uiBlob}
                alt="blob"
                className="ui info-blob hide-content"
              /> */}
              <div className="info-div hide-content"></div>
              <img src={ui} alt="ui" className="skill-img" />
            </div>
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={this.showDesign}
                onMouseLeave={this.hideDesign}
              >
                mobile
              </span>
              <span>•</span>
              {/* <img
                src={mobileBlob}
                alt="blob"
                className="mobile info-blob hide-content"
              /> */}
              <div className="info-div hide-content"></div>
              <img src={mobile} alt="mobile" className="skill-img" />
            </div>
            <div id="skill-div">
              <span
                className="skill-name"
                onMouseOver={this.showDesign}
                onMouseLeave={this.hideDesign}
              >
                web
              </span>
              <span>•</span>
              {/* <img
                src={webBlob}
                alt="blob"
                className="web info-blob hide-content"
              /> */}
              <div className="info-div hide-content"></div>
              <img src={web} alt="web" className="skill-img" />
            </div>
          </div>
          {/* <div>Skills =></div>
          <img src={avatar} alt="avatar" /> */}
        </div>
      </Container>
    );
  }
}
export default Skills;
