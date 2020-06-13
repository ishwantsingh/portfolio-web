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
      .skill-name {
        z-index: 1;
        margin-right: -5%;
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
`;

class Skills extends React.Component {
  constructor(props) {
    super(props);
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

  showDesign = (e) => {
    e.preventDefault();
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
              <span className="skill-name" onMouseOver={this.showDesign}>
                product
              </span>
              {/* <img src={prodBlob} alt="blob" /> */}
              <img src={design} alt="design" className="skill-img" />
            </div>
            <div id="skill-div">
              <span className="skill-name">ui/ux</span>{" "}
              <img src={ui} alt="ui" className="skill-img" />
            </div>
            <div id="skill-div">
              <span className="skill-name">mobile</span>
              <img src={mobile} alt="mobile" className="skill-img" />
            </div>
            <div id="skill-div">
              <span className="skill-name">web</span>
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
