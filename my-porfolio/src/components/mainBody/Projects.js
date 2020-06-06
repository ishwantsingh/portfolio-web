import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import { Icon, Form, Checkbox } from "semantic-ui-react";
import history from "../../history";

import postit from "../../assets/post-it.mp4";
import treway from "../../assets/treway.mp4";
import mecon from "../../assets/me-con.mp4";
import bgImage from "../../assets/line-art-left.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: content;
  font-size: 4rem;
  .project-heading {
    width: 100%;
    height: 5rem;
    text-align: center;
    font-family: "Prata", serif;
    color: #383838;
    font-weight: 500;
  }
  .project-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .projectVidContainer {
    width: 67vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }
  .projectVid {
    // height: 68vh;
    width: 63vw;
    box-shadow: 0px 18px 36px #6b6b6b;
    border-radius: 10px;
    opacity: 1;
  }
  .meconProjectVid {
    height: 68vh;
    box-shadow: 0px 18px 36px #6b6b6b;
    border-radius: 10px;
    opacity: 1;
  }
  .icon {
    width: 5%;
    text-shadow: 0px 8px 18px #d0d0d0;
    color: #303030;
    cursor: pointer;
    opacity: 1 !important;
  }
  i.icon.disabled:hover {
    font-size: 4rem !important;
    text-shadow: 0px 8px 18px #d0d0d0;
    cursor: default;
  }
  i.icon:hover {
    font-size: 4.2rem;
    text-shadow: 0px 0px 0px #ffffff;
    color: #303030;
  }
  .radio-form {
    display: flex;
    flex-direction: row;
  }
  .field {
    margin: 1.5rem 0 0 0 !important ;
  }
  .ui.checkbox input.hidden + label {
    cursor: default !important;
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: postit,
      currentVidName: "Post It",
      leftArrDisabled: true,
      rightArrDisabled: false,
      postitLink: "https://github.com/ishwantsingh/Post-It-",
      trewayLink: "https://tre-way.web.app/",
      meconLink:
        "https://play.google.com/store/apps/details?id=com.paislay.mecon&hl=en",
    };
    this.timeline = new TimelineMax({ paused: true });
    this.videoTimeline = new TimelineMax({ paused: true });
    this.videoTimeline2 = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from("#content-2", 0.5, {
        autoAlpha: 0,
        delay: 0,
        ease: Power1.easeIn,
      })
      .staggerFrom(
        "#video",
        0.475,
        { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0.1 },
        0.185
      )
      .from("#left-arr", 0.4, {
        autoAlpha: 0,
        x: -50,
        ease: "power1.easeOut",
      })
      .from(
        "#right-arr",
        0.4,
        {
          autoAlpha: 0,
          x: 50,
          ease: "power1.easeOut",
        },
        "<"
      )
      .from(
        "#radio-buts",
        0.4,
        {
          autoAlpha: 0,
          y: 50,
          ease: "power1.easeOut",
        },
        "<"
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

  changeVideo = (e, butPressed) => {
    e.preventDefault();
    let vid = document.querySelector("div.projectVidContainer #video");
    let vidSrc = document.querySelector(
      "div.projectVidContainer #video-source"
    );
    let anchorTag = document.querySelector("div.projectVidContainer a");
    vid.pause();
    if (this.state.currentVideo === postit && butPressed === "next") {
      this.setState({ currentVideo: treway });
      this.setState({ currentVidName: "Treway" });
      this.videoTimeline.from(vid, 1, {
        autoAlpha: 0,
        x: 80,
        delay: 0.2,
        ease: "power1.easeOut",
      });
      this.setState({ leftArrDisabled: false });
      vidSrc.setAttribute("src", treway);
      vid.setAttribute("title", "Treway demo");
      anchorTag.setAttribute("href", this.state.trewayLink);
      this.videoTimeline.play();
    } else if (this.state.currentVideo === treway && butPressed === "prev") {
      this.setState({ currentVideo: postit });
      this.setState({ currentVidName: "Post It" });
      this.videoTimeline2.from(vid, 1, {
        autoAlpha: 0,
        x: -80,
        delay: 0.2,
        ease: "power1.easeOut",
      });
      this.setState({ leftArrDisabled: true });
      this.setState({ rightArrDisabled: false });
      vidSrc.setAttribute("src", postit);
      vid.setAttribute("title", "Post It Demo");
      anchorTag.setAttribute("href", this.state.postitLink);
      this.videoTimeline2.play();
    } else if (this.state.currentVideo === treway && butPressed === "next") {
      this.setState({ currentVideo: mecon });
      this.setState({ currentVidName: "Mecon" });
      this.videoTimeline.from(vid, 1, {
        autoAlpha: 0,
        x: 80,
        delay: 0.2,
        ease: "power1.easeOut",
      });
      this.setState({ leftArrDisabled: false });
      this.setState({ rightArrDisabled: true });
      vidSrc.setAttribute("src", mecon);
      vid.setAttribute("title", "Mecon demo");
      vid.setAttribute("class", "meconProjectVid");
      anchorTag.setAttribute("href", this.state.meconLink);
      this.videoTimeline.play();
    } else if (this.state.currentVideo === mecon && butPressed === "prev") {
      this.setState({ currentVideo: treway });
      this.setState({ currentVidName: "Treway" });
      this.videoTimeline2.from(vid, 1, {
        autoAlpha: 0,
        x: -80,
        delay: 0.2,
        ease: "power1.easeOut",
      });
      this.setState({ leftArrDisabled: false });
      this.setState({ rightArrDisabled: false });
      vidSrc.setAttribute("src", treway);
      vid.setAttribute("title", "Treway Demo");
      vid.setAttribute("class", "projectVid");
      anchorTag.setAttribute("href", this.state.trewayLink);
      this.videoTimeline2.play();
    }
    vid.load();
    vid.play();
  };

  render() {
    return (
      <Container id="content-2">
        <div className="project-heading">{this.state.currentVidName}</div>
        <div className="project-content">
          <Icon
            name="chevron circle left"
            className="icon"
            id="left-arr"
            onClick={(e) => this.changeVideo(e, "prev")}
            disabled={
              this.state.currentVideo === postit
                ? this.state.leftArrDisabled
                : false
            }
          />
          <div className="projectVidContainer" id="video">
            <a
              href="https://github.com/ishwantsingh/Post-It-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                id="video"
                className="projectVid"
                playsInline={true}
                type="video/mp4"
                muted
                autoPlay
                loop
                preload="auto"
                title="Post It Demo"
              >
                <source id="video-source" src={postit} type="video/mp4" /> Your
                browser doesn't support HTML5 video tag.
              </video>
            </a>
          </div>
          <Icon
            name="chevron circle right"
            className="icon"
            id="right-arr"
            onClick={(e) => this.changeVideo(e, "next")}
            disabled={
              this.state.currentVideo === mecon
                ? this.state.rightArrDisabled
                : false
            }
          />
        </div>
        <Form className="radio-form" id="radio-buts">
          <Form.Field>
            <Checkbox
              disabled
              radio
              label=""
              name="checkboxRadioGroup"
              value="Post It"
              checked={this.state.currentVidName === "Post It"}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              disabled
              radio
              label=""
              name="checkboxRadioGroup"
              value="Treway"
              checked={this.state.currentVidName === "Treway"}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              disabled
              radio
              label=""
              name="checkboxRadioGroup"
              value="Mecon"
              checked={this.state.currentVidName === "Mecon"}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default Projects;
