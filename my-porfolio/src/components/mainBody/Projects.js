import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import history from "../../history";

import postit from "../../assets/post-it.mp4";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  // border-right: 1.5px solid #e1e0e0;
  background-color: white;
  font-size: 4rem;
  .projectVidContainer{
    margin-top: 5rem;
    width: 67vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border 1px dashed #333;
    border-radius: 5px;
  }
  .projectVid{
    width: 60vw;
    // height: 65vh;
    // border 1px solid #333;
    box-shadow: 0px 24px 48px #6b6b6b;
    border-radius: 8px;
  }
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline.from("#content-2", 1.5, {
      autoAlpha: 0,
      delay: 0,
      ease: Power1.easeIn,
    });
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
        <div>Post It!</div>
        <div class="projectVidContainer">
          <a href="https://post-it-8.firebaseapp.com/" target="_blank">
            <video
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
      </Container>
    );
  }
}

export default Projects;
