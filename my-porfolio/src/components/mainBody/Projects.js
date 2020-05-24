import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import { Icon } from "semantic-ui-react";
import history from "../../history";

import postit from "../../assets/post-it.mp4";

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
    width: 61vw;
    box-shadow: 0px 18px 36px #6b6b6b;
    border-radius: 10px;
  }
  .icon {
    width: 5%;
    text-shadow: 0px 8px 18px #D0D0D0;
    color: #303030;
    cursor: pointer;

  }
  i.icon:hover {
    font-size: 4.2rem;
    text-shadow: 0px 0px 0px #FFFFFF;
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from("#content-2", 1.5, {
        autoAlpha: 0,
        delay: 0,
        ease: Power1.easeIn,
      })
      .staggerFrom(
        "#video",
        0.475,
        { autoAlpha: 0, x: -25, ease: Power1.easeOut, delay: 0.1 },
        0.185
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
      <Container id="content-2">
        <div className="project-heading">Post It!</div>
        <div className="project-content">
          <Icon name="chevron circle left" className="icon" />
          <div class="projectVidContainer" id="video">
            <a href="https://post-it-8.firebaseapp.com/" target="_blank">
              <video
                id="video"
                class="projectVid"
                playsInline="true"
                src={postit}
                type="video/mp4"
                muted
                autoPlay
                loop
                preload="auto"
              >
                {" "}
                Your browser doesn't support HTML5 video tag.
              </video>
            </a>
          </div>
          <Icon name="chevron circle right" className="icon" />
        </div>
      </Container>
    );
  }
}

export default Projects;
