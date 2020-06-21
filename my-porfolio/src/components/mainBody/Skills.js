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
      font-size: 0.23em;
      align-items: center;
      justify-content: flex-end;
      text-align: left;
      .skill-img {
        width: 17vw;
        height: 6.5vw;
        // width: 17vw;
        // height: 13vh;
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
    // border-top: 1px dashed #E1E0E0;
    // border-bottom: 1px dashed #E1E0E0;
    border-top-left-radius: 6px 1.5px; 
    border-bottom-left-radius: 6px 1.5px;
  }
  .tech-skill {
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 75%;
    border: 2px solid #1B1C1D;
    border-radius: 6px;
    // background-color: black;
    .tech-skill-name{
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: flex-start !important;
      width: 22% !important;
      height: 100%;
      background-color: white;
      font-weight: 500;
      border-right: 2px solid #000000;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .tech-skill-fill {
      display: flex;
      justify-self: flex-start !important;
      height: 100%;
      background: linear-gradient(239.07deg, #444444 1.07%, #000000 100%);
    }
    .tech-skill-perc {
      display: flex;
      justify-self: flex-end !important;
      justify-content: center;
      align-items: center;
      width: 8%;
      height: 100%;
      background-color: white;
      border-left: 2px solid #1B1C1D;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ui: [
        ["Figma", 85],
        ["Wireframing", 90],
        ["Svg Animation", 80],
        ["Css Animation", 70],
        ["User Research", 70],
        ["Prototyping", 85],
      ],
      mobile: [
        ["React Native", 75],
        ["Expo", 80],
        ["Expo-APIs", 70],
        ["Redux", 80],
        ["Styled-Comp", 90],
        ["React-Nav", 80],
      ],
      frontend: [
        ["Html5", 90],
        ["Css3", 90],
        ["JavaScript", 85],
        ["React.js", 85],
        ["Redux", 80],
        ["Styled-Comp", 90],
      ],
      backend: [
        ["Node.js", 65],
        ["Express", 65],
        ["SQL", 60],
        ["NoSQL", 75],
        ["REST", 60],
        ["Firebase", 80],
      ],
    };
    this.timeline = new TimelineMax({ paused: true });
    this.timeline2 = new TimelineMax({ paused: true });
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
      .from(".tech-skill-name", 0.2, {
        // opacity: 0,
        autoAlpha: 0,
        scaleX: 0,
        transformOrigin: "right",
        ease: "slow.easeIn",
      })
      .from(
        ".tech-skill-perc",
        0.2,
        {
          autoAlpha: 0,
          scaleX: 0,
          transformOrigin: "right",
          ease: "slow.easeIn",
        },
        ">="
      )
      .from(".tech-skill-fill", 0.5, {
        scaleX: 0,
        transformOrigin: "left",
        ease: "slow.easeIn",
      })
      .staggerFrom(
        "#skill-div",
        0.5,
        { autoAlpha: 0, x: -40, ease: Power1.easeOut, delay: 0 },
        0.1
      );
    this.timeline.play();
  }

  changePage = (e, destination) => {
    e.preventDefault();
    this.timeline2
      .to(".bgImage", 1.1, {
        autoAlpha: 0,
        delay: 2.1,
      })
      .play();
    this.timeline.timeScale(1.5).reverse();
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
      techSkillNameSpan.innerHTML = this.state[skill][i][0];
      let techSkillFill =
        e.target.parentNode.parentNode.parentNode.children[0].children[i]
          .children[1].children[0];
      techSkillFill.style.width = `${this.state[skill][i][1]}%`;
      let techSkillPerc =
        e.target.parentNode.parentNode.parentNode.children[0].children[i]
          .children[2];
      techSkillPerc.innerHTML = `${this.state[skill][i][1]}%`;
    }
  };

  render() {
    return (
      <Container>
        <SvgCoolBg className="bgImage" />
        <div id="content-3">
          <div className="info-div">
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[0][0]}</span>
              <span
                style={{
                  display: "flex",
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[0][1]}%` }}
                ></span>
              </span>
              <span className="tech-skill-perc">{this.state.ui[0][1]}%</span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[1][0]}</span>
              <span
                style={{
                  display: "flex",
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[1][1]}%` }}
                ></span>
              </span>
              <span className="tech-skill-perc">{this.state.ui[1][1]}%</span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[2][0]}</span>
              <span
                style={{
                  display: "flex",
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[2][1]}%` }}
                ></span>
              </span>
              <span className="tech-skill-perc">{this.state.ui[2][1]}%</span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[3][0]}</span>
              <span
                style={{
                  display: "flex",
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[3][1]}%` }}
                ></span>
              </span>
              <span className="tech-skill-perc">{this.state.ui[3][1]}%</span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[4][0]}</span>
              <span
                style={{
                  display: "flex",
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[4][1]}%` }}
                ></span>
              </span>
              <span className="tech-skill-perc">{this.state.ui[4][1]}%</span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[5][0]}</span>
              <span
                style={{
                  display: "flex",
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
              >
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[5][1]}%` }}
                ></span>
              </span>
              <span className="tech-skill-perc">{this.state.ui[5][1]}%</span>
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
