import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import { Icon, Form, Checkbox } from "semantic-ui-react";
import history from "../../history";

import postit from "../../assets/post-it.mp4";
import treway from "../../assets/treway.mp4";
import mecon from "../../assets/me-con.mp4";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 4rem;
  .project-heading {
    width: 100%;
    height: 5rem;
    text-align: center;
  }
  .project-content {
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items: center;
  }
  .projectVidContainer{
    width: 67vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border 1px dashed rgb(224,222,222);
    border-radius: 6px;
  }
  .projectVid{
    height: 68vh;
    box-shadow: 0px 18px 36px #6b6b6b;
    border-radius: 10px;
  }
  .icon {
    width: 5%;
    text-shadow: 0px 8px 18px #D0D0D0;
    color: #303030;
    cursor: pointer;
    opacity: 1 !important;
  }
  i.icon.disabled:hover {
     font-size: 4rem !important;
     text-shadow: 0px 8px 18px #D0D0D0;
     cursor: default;
  }
  i.icon:hover {
    font-size: 4.2rem;
     text-shadow: 0px 0px 0px #FFFFFF;
     color: #303030;
  }
  .radio-form {
    display: flex;
    flex-direction: row;
  }
  .field {
    margin: 1.5rem 0 0 0 !important ;
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // lastVideo: null,
      currentVideo: postit,
      currentVidName: "Post It",
      // nextVideo: null,
      leftArrDisabled: true,
      rightArrDisabled: false,
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
    console.log("vidSrc", vid);
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
      this.videoTimeline.reverse();
      this.setState({ leftArrDisabled: false });
      vidSrc.setAttribute("src", treway);
      vid.setAttribute("title", "Treway demo");
      this.videoTimeline.pause();
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
      this.videoTimeline2.reverse();
      this.setState({ leftArrDisabled: true });
      this.setState({ rightArrDisabled: false });
      vidSrc.setAttribute("src", postit);
      vid.setAttribute("title", "Post It Demo");
      this.videoTimeline2.pause();
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
      this.videoTimeline.reverse();
      this.setState({ leftArrDisabled: false });
      this.setState({ rightArrDisabled: true });
      vidSrc.setAttribute("src", mecon);
      vid.setAttribute("title", "Mecon demo");
      this.videoTimeline.pause();
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
      this.videoTimeline2.reverse();
      this.setState({ leftArrDisabled: false });
      this.setState({ rightArrDisabled: false });
      vidSrc.setAttribute("src", treway);
      vid.setAttribute("title", "Treway Demo");
      this.videoTimeline2.pause();
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
              href="https://post-it-8.firebaseapp.com/"
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
              radio
              label=""
              name="checkboxRadioGroup"
              value="Post It"
              checked={this.state.currentVidName === "Post It"}
              // onChange={(e) => this.changeVideo(e, "postit")}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label=""
              name="checkboxRadioGroup"
              value="Treway"
              checked={this.state.currentVidName === "Treway"}
              // onChange={(e) => this.changeVideo(e, "treway")}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label=""
              name="checkboxRadioGroup"
              value="Mecon"
              checked={this.state.currentVidName === "Mecon"}
              // onChange={(e) => this.changeVideo(e, "mecon")}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default Projects;
