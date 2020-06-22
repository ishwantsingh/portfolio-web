import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import history from "../../history";

import stairwell from "../../assets/stairwell.jpeg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // border-right: 1.5px solid #e1e0e0;
  background-color: white;
  font-size: 7rem;
  text-align: center;
  .bgImage {
    display: flex;
    // position: absolute;
    width: 100%;
    height: 100%;
    // top: -50%;
    // left: -50%;
    // z-index: -1;
    // width: 25vw;
    // height: 35vh;
    // display: flex;
    // justify-self: flex-start;
    // align-self: flex-start;
  }
  // .hobby-container:hover {
  //   transform: ;
  //   transition: all400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s;
  // }
`;

const Image = styled.img`
  display: block;
  width: 25vw;
  height: 70vh;
`;
const HobbyDiv = styled.div`
  display: block;
  box-sizing: border-box;
  will-change: transform;

  // :hover {
  //   transition: all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s;
  // }
`;

// transform: ${(props) => `rotateX(${props.xCoord})``rotateY(${props.yCoord})`};

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 600,
      y: 600,
    };
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline.from("#content-4", 1.5, {
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

  mouseCoords = (e) => {
    e.preventDefault();
    let x = (e.clientX / 100) * 0.8;
    let y = (e.clientY / 100) * 1.1;
    console.log("x=> ", x, "y=> ", y);
    // this.setState({ x: (x / 100) * 0.8, y: (y / 100) * 1.1 });
    // e.target.style.width = "40rem";
    // e.target.parentNode.style.transform = `perspective(300) rotateX(var(--mouse-varx)) rotateY(var(--mouse-vary))`;
    e.target.parentNode.style.setProperty("--mouse-varx", x + "deg");
    e.target.parentNode.style.setProperty("--mouse-vary", y + "deg");
  };
  enter = (e) => {
    e.preventDefault();
    e.target.parentNode.style.transition =
      " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
  };

  render() {
    return (
      <Container id="content-4">
        <div>hobbies</div>
        <HobbyDiv
          className="hobby-container"
          style={{
            transform:
              " rotateX(var(--mouse-varx)) perspective(300) rotateY(var(--mouse-vary)) translateY(-50%)",
          }}
          onMouseMove={this.mouseCoords}
          onMouseEnter={this.enter}
        >
          <Image src={stairwell} alt="stairwell" className="photography" />
        </HobbyDiv>
      </Container>
    );
  }
}
export default Hobbies;
