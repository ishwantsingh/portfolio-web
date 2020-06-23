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
  --mouse-varx: 5deg;
  --mouse-vary: 10deg;
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
  .photography {
    display: block;
    width: 25vw;
    height: 70vh;
    border: 2px solid black;
  }

  // .hobby-container {
  // --mouse-varx: 5deg;
  // --mouse-vary: 10deg;
  //   display: block;
  //   border: 2px solid black;
  //   box-sizing: border-box;
  //   will-change: transform;
  //   transform: perspective(300) rotateX(5deg) rotateY(var(--mouse-vary));
  //   // transform: perspective(300) rotateX(var(--mouse-varx))
  //   //   rotateY(var(--mouse-vary));
  // }
`;

// const Image = styled.img`
//   display: block;
//   width: 25vw;
//   height: 70vh;
// `;
// const HobbyDiv = styled.div`
//   display: block;
//   box-sizing: border-box;
//   will-change: transform;

//   // :hover {
//   //   transition: all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s;
//   // }
// `;

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
    console.log("x=> ", x, "y=> ", y, e.target);
    this.setState({ x: (x / 100) * 0.8, y: (y / 100) * 1.1 });
    // e.target.style.width = "40rem";
    // e.target.parentNode.style.transform = `perspective(300) rotateX(var(--mouse-varx)) rotateY(var(--mouse-vary))`;
    e.target.parentNode.parentNode.style.setProperty("--mouse-varx", x + "deg");
    e.target.parentNode.parentNode.style.setProperty("--mouse-vary", y + "deg");
  };
  enter = (e) => {
    e.preventDefault();
    e.target.parentNode.style.transition =
      " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
  };

  render() {
    let trans =
      "perspective(300)" +
      "rotateX(" +
      this.state.x +
      ")" +
      " rotateY(" +
      this.state.y +
      ")";
    var hobbyContainer = {
      display: "block",
      border: "2px solid black",
      // willChange: "transform",
      transform: trans,
      // transform: perspective(300) rotateX(var(--mouse-varx))
      //   rotateY(var(--mouse-vary));
    };
    return (
      <Container id="content-4">
        <div>hobbies</div>
        <div
          style={hobbyContainer}
          // className="hobby-container"
          onMouseMove={this.mouseCoords}
          onMouseEnter={this.enter}
        >
          <img src={stairwell} alt="stairwell" className="photography" />
        </div>
      </Container>
    );
  }
}
export default Hobbies;
