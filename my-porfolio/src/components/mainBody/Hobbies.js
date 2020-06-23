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
  --mouse-vary: 0deg;
  --mouse-varx: 0deg;
  transform: perspective(0px) rotateX(0deg) rotateY(0deg) !important;
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
    width: 20vw;
    height: 50vh;
    margin: 1vw auto;
    border: 2px solid black;
  }
  .hobby-container {
    display: block;
    width: 22vw;
    height: 55vh;
    border: 2px solid black;
    box-sizing: border-box;
    will-change: transform;
    transform: perspective(300px) rotateX(var(--mouse-vary))
      rotateY(var(--mouse-varx));
    // transform: perspective(300) rotateX(var(--mouse-varx))
    //   rotateY(var(--mouse-vary));
  }
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

  enter = (e) => {
    e.preventDefault();
    let enterX = e.clientX;
    let enterY = e.clientY;
    this.setState({ enterX: enterX, enterY: enterY });
    e.target.style.transition =
      " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
  };

  mouseCoords = (e) => {
    e.preventDefault();

    let x;
    let y;
    let picWidth = getComputedStyle(e.target).width;
    let picLength = getComputedStyle(e.target).length;
    console.log(this.state.enterX, "w", e.clientX, "p", picWidth);
    if (e.clientY <= this.state.enterY + picLength / 2) {
      y = (e.clientY / 200) * 0.95;
    } else if (e.clientY >= this.state.enterY + picLength / 2) {
      y = -((e.clientY / 200) * 0.95);
    }
    if (e.clientX <= this.state.enterX + parseFloat(picWidth) / 2) {
      x = (e.clientX / 200) * 0.8;
    } else if (e.clientX >= this.state.enterX + parseFloat(picWidth) / 2) {
      x = -((e.clientX / 200) * 0.8);
    }

    console.log("x=> ", x, "y=> ", y);
    // this.setState({ x: (x / 100) * 0.8, y: (y / 100) * 1.1 });
    // e.target.style.width = "40rem";
    e.target.parentNode.style.transform = `perspective(300px) rotateX(var(--mouse-vary)) rotateY(var(--mouse-varx))`;
    e.target.parentNode.style.setProperty("--mouse-vary", y + "deg");
    e.target.parentNode.style.setProperty("--mouse-varx", x + "deg");
  };
  // var(--mouse-varx)

  leave = (e) => {
    e.preventDefault();
    e.target.parentNode.style.transition =
      " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
    e.target.style.setProperty("--mouse-varx", 0 + "deg");
    e.target.style.setProperty("--mouse-vary", 0 + "deg");
    // e.target.parentNode.style.transform = `perspective(0px) rotateX(5deg) rotateY(var(--mouse-varx))`;
  };

  render() {
    return (
      <Container id="content-4">
        <div>hobbies</div>
        <div
          className="hobby-container"
          onMouseMove={this.mouseCoords}
          onMouseEnter={this.enter}
          onMouseLeave={this.leave}
        >
          <img src={stairwell} alt="stairwell" className="photography" />
        </div>
      </Container>
    );
  }
}
export default Hobbies;
