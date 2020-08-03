import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap";
import history from "../../history";

import backend from "../../assets/backend.svg";
import web from "../../assets/web.svg";
import ui from "../../assets/ui.svg";
import mobile from "../../assets/mobile.svg";
import SvgCoolBg from "../animations/cool-Bg.js";
import bgImage from "../../assets/line-art-left.svg";

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
    color: #393939;
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
  .info-div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 58vw;
    height 78vh;
    position: absolute;
    top: 11vh;
    right: 29vw;
    padding: 0 0 0 5%;
    font-family: "Roboto", serif;
    font-size: 1.4rem;
    background-color: white;
    border-left: 4px solid #1B1C1D;
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
    .tech-skill-name{
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: flex-start !important;
      width: 25%;
      height: 100%;
      background-color: white;
      font-weight: 500;
      border-right: 2px solid #000000;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      color: #393939;
    }
    .tech-skill-fill {
      display: flex;
      justify-self: flex-start !important;
      height: 100%;
      background: linear-gradient(239.07deg, #454545 1.07%, #222222 100%);
    }
    .tech-skill-fill-container {
      display: flex;
      height: 100%;
      width: 75%;
      backgroundColor: white;
      borderTopRightRadius: 4px;
      borderBottomRightRadius: 4px;
    }
  }
  @media (max-width: 1650px) {
    .tech-skill {
      height: 2.85rem;
  }
  @media (max-width: 1450px) {
    .tech-skill {
      height: 2.6rem;
  }
  @media (max-width: 1250px) {
    .tech-skill {
      height: 2.8rem;
  }
  @media only screen and (max-width: 950px) {
    width: 100vw;
    height: 90vh;
    flex-direction: row;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: content;
    #content-3 {
      width: 100vw;
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .bgImage {
      display: none;
    }
    .info-div {
      width: 98vw;
      height: 65vh;
      margin-top: 5rem;
      margin-right: -28vw;
      border-left: 0;
      border-radius: 0;
      background-color: transparent;
    }
    #skills {
      flex-direction: row;
      width: 90vw;
      height: 7vh;
      justify-content: space-between !important;
    }
    .tech-skill {
      width: 94%;
      font-size: 1.2rem !important;
    }
    .tech-skill-name {
      width: 37% !important;
      font-size: 1.1rem !important;
      text-align: center;
      background-color: white;
    }
    .tech-skill-fill-container {
      display: flex;
      height: 100%;
      width: 63% ;
      backgroundColor: white;
      borderTopRightRadius: 4px;
      borderBottomRightRadius: 4px;
    }
    #skill-div {
      width: fit-content !important;
      flex-direction: row-reverse !important;
      justify-content: flex-end !important;
      font-size: 1.46rem !important;
    }
    .skill-img {
      display: none;
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
        ["Css Animation", 75],
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
        ["Next.js", 90],
      ],
      backend: [
        ["Node.js", 75],
        ["Express", 75],
        ["SQL", 70],
        ["NoSQL", 80],
        ["REST", 70],
        ["Firebase", 85],
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
        autoAlpha: 0,
        ease: Power1.easeIn,
      })
      .from(
        ".tech-skill-fill",
        0.5,
        {
          scaleX: 0,
          transformOrigin: "left",
          ease: "slow.easeIn",
        },
        ">="
      )
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
    this.timeline.timeScale(1.8).reverse();
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
              <span className="tech-skill-fill-container">
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[0][1]}%` }}
                ></span>
              </span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[1][0]}</span>
              <span className="tech-skill-fill-container">
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[1][1]}%` }}
                ></span>
              </span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[2][0]}</span>
              <span className="tech-skill-fill-container">
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[2][1]}%` }}
                ></span>
              </span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[3][0]}</span>
              <span className="tech-skill-fill-container">
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[3][1]}%` }}
                ></span>
              </span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[4][0]}</span>
              <span className="tech-skill-fill-container">
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[4][1]}%` }}
                ></span>
              </span>
            </div>
            <div className="tech-skill">
              <span className="tech-skill-name">{this.state.ui[5][0]}</span>
              <span className="tech-skill-fill-container">
                <span
                  className="tech-skill-fill"
                  style={{ width: `${this.state.ui[5][1]}%` }}
                ></span>
              </span>
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
