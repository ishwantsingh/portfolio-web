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
      .skill-hover {
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .bgImage {
    position: absolute;
    top: 0%;
    left: -15%;
    z-index: -1;
    display: flex;
    width: 100%;
    height: 100%;
  }
  .info-blob {
    width: 60vw;
    height 91vh;
    filter: drop-shadow(0px 6px 15px #696969) blur(0.5px);;
  }
  .info-div {
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
    font-family: "Roboto", serif;
    font-size: 1.4rem;
    background-color: white;
    border-left: 4px solid #1B1C1D;
    border-top: 1px dashed #E1E0E0;
    border-bottom: 1px dashed #E1E0E0;
    border-top-left-radius: 6px 1.5px; 
    border-bottom-left-radius: 6px 1.5px;
  }
  .tech-skill {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    width: 75%;
    border: 2px solid #1B1C1D;
    border-radius: 6px;
    .tech-skill-name{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22%;
      height: 100%;
      font-weight: 500;
      // color: white;
      border-right: 2px solid #000000;  // REMOVE THIS LATER
      // border-radius: 5px;

      // background-color: #333333;
      // background: linear-gradient(239.07deg, #333333 1.07%, #000000 100%);
    }
    .tech-skill-fill {
      background: linear-gradient(239.07deg, #333333 1.07%, #000000 100%);
    }
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
      content5: "Content 5",
      ui: [
        "Figma",
        "Wireframing",
        "Svg Animation",
        "Css Animation",
        "User Research",
        "Prototyping",
      ],
      mobile: [
        "React Native",
        "Expo",
        "Expo-APIs",
        "Redux",
        "Styled-Comp",
        "React-Nav",
      ],
      frontend: [
        "Html5",
        "Css3",
        "JavaScript",
        "React.js",
        "Redux",
        "Styled-Comp",
      ],
      backend: ["Node.js", "Express", "SQL", "NoSQL", "REST", "Firebase"],
    };
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from(".info-div", 0.5, {
        scaleX: 0,
        transformOrigin: "right",
        ease: Power1.easeIn,
        delay: 1.1,
      })
      .staggerFrom(
        ".info-div > div",
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

  showDesign = (e, skill) => {
    e.preventDefault();
    switch (skill) {
      default:
        break;
      case "ui":
        e.target.classList.add("skill-hover");
        e.target.parentNode.parentNode.children[1].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[2].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[3].children[0].classList.remove(
          "skill-hover"
        );
        break;
      case "mobile":
        e.target.classList.add("skill-hover");
        e.target.parentNode.parentNode.children[0].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[2].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[3].children[0].classList.remove(
          "skill-hover"
        );
        break;
      case "frontend":
        e.target.classList.add("skill-hover");
        e.target.parentNode.parentNode.children[0].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[1].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[3].children[0].classList.remove(
          "skill-hover"
        );
        break;
      case "backend":
        e.target.classList.add("skill-hover");
        e.target.parentNode.parentNode.children[0].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[1].children[0].classList.remove(
          "skill-hover"
        );
        e.target.parentNode.parentNode.children[2].children[0].classList.remove(
          "skill-hover"
        );
        break;
    }

    let lastSkillIndex = this.state[skill].length - 1;
    for (let i = 0; i <= lastSkillIndex; i++) {
      console.log("i", i, skill);
      let techSkillNameSpan =
        e.target.parentNode.parentNode.parentNode.children[0].children[i]
          .children[0];
      techSkillNameSpan.innerHTML = this.state[skill][i];
    }
  };

  render() {
    return (
      <Container>
        <SvgCoolBg className="bgImage" />
        <div id="content-3">
          <div className="info-div">
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[0]}</span>
              <span className="tech-skill-fill"></span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[1]}</span>
              <span className="tech-skill-fill"></span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[2]}</span>
              <span className="tech-skill-fill"></span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[3]}</span>
              <span className="tech-skill-fill"></span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[4]}</span>
              <span className="tech-skill-fill"></span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[5]}</span>
              <span className="tech-skill-fill"></span>
            </div>
          </div>
          <div id="skills">
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div id="skill-div">
              <span
                className="skill-name skill-hover"
                onMouseOver={(e) => this.showDesign(e, "ui")}
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
              >
                backend
              </span>
              <span>•</span>
              <img src={backend} alt="backend" className="skill-img" />
            </div>
            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
          </div>
        </div>
      </Container>
    );
  }
}
export default Skills;
