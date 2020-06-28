import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1 } from "gsap/all";
import history from "../../history";
import { Icon } from "semantic-ui-react";

import stairwell from "../../assets/stairwell.jpeg";
import river from "../../assets/river.jpeg";
import fire from "../../assets/fire.jpeg";
import road from "../../assets/road.jpeg";

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
  transform: perspective(0px) rotateX(0deg) rotateY(0deg) !important;
  .page-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
  }
  .page.right {
    border-left: 1px solid #f0f0f0;
  }
  #river {
    width: 35vw;
    height: 24vw;
  }
  #stairwell {
    width: 12vw;
    height: 15vw;
    margin-left: 50%;
  }
  #fire {
    width: 13vw;
    height: 16vw;
    margin-right: 10%;
  }
  .photography {
    display: block;
    width: 15vw;
    height: 20vw;
    margin: 1vw auto;
  }
  .photography2 {
    display: block;
    width: 27vw;
    height: 20vw;
    margin: 1vw auto;
  }

  .hobby-container-first {
    --mouse-vary: 0deg;
    --mouse-varx: 0deg;
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: 0.9;
    // border: 2px solid black;
    box-sizing: border-box;
    will-change: transform;
    transform: perspective(200px) rotateX(var(--mouse-vary))
      rotateY(var(--mouse-varx));
  }
  .pic-name {
    font-size: 1rem;
    font-weight: normal;
    width: 35vw;
    margin 0 auto;
    text-align: left;
    align-self: flex-start;
    color: #444;
    margin-top: -0.5rem !important;
  }
  .pic-name.road {
    width: 27vw;
    margin: 0 auto;
  }
  .stairwell {
    align-self: flex-end;
    // margin-right: 15%;
    margin-top: 2rem;
  }
  .fire {
    align-self: flex-end;
    margin-bottom: 3.5rem;
  }
  .hobby-container-second {
    --mouse-vary-sec: 0deg;
    --mouse-varx-sec: 0deg;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-end;
    width: 100%;
    opacity: 0.9;
    // border: 2px solid black;
    box-sizing: border-box;
    will-change: transform;
    transform: perspective(200px) rotateX(var(--mouse-vary-sec))
      rotateY(var(--mouse-varx-sec));
  }
  .pic-name.stairwell {
    width: 12vw;
    margin-top: 0;
    margin-left: 50%;
    align-self: flex-start;
  }
  .pic-name.fire {
    width: 13vw;
    margin-top: 0;
    margin-right: 10%;
    align-self: flex-start;
  }
  .cover-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .cover {
    display: block;
    width: 50%;
    height: 100%;
    background-color: #EDE8E4;
  }
  .hidden {
    display: none;
  }
  .icon.back {
    display: flex;
    top: 50%;
    left: 1.2%;
    position: absolute;
    font-size: 2.33rem;
    color: #505050;
  }
  .icon.next {
    display: flex;
    top: 50%;
    right: 1.2%;
    position: absolute;
    font-size: 2.33rem;
    color: #505050;
  }
  i.icon:hover {
    cursor: pointer;
    font-size: 2.2rem;
    text-shadow: 0px 0px 0px #ffffff;
    color: #101010;
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
    let enterY = e.clientY;
    let enterX = e.clientX; //// PROBLEM WITH COMPARING W ENTER COORDINATES
    this.setState({ enterY: enterY, enterX: enterX });
    e.target.style.transition =
      " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
  };

  mouseCoords = (e, mouseYClass, mouseXClass) => {
    e.preventDefault();

    let x;
    let y;
    let picWidth = getComputedStyle(e.target).width;
    let picLength = getComputedStyle(e.target).length;
    // console.log(this.state.enterX, "w", e.clientX, "p", picWidth);
    // if ( e.clientY < this.state.enterY + picLength / 2) {
    y = ((e.clientY - this.state.enterY + picLength) / 150) * 1.1;
    // } else if (e.clientY >= this.state.enterY + picLength / 2) {
    //   y = -((this.state.enterY + picLength / 100) * 0.95);
    // }
    // if (e.movementX >=1 && e.clientX <= this.state.enterX + parseFloat(picWidth) / 2) {
    x = ((e.clientX - this.state.enterX + parseFloat(picWidth)) / 150) * 1.1; // CHANGED SIGNS HERE
    // } else if (e.clientX >= this.state.enterX + parseFloat(picWidth) / 2) {
    //   x = -((e.clientX / 200) * 0.8);
    // }

    console.log("x=> ", x, "y=> ", y, e.clientX, e.pageX, e.screenX);
    // this.setState({ x: (x / 100) * 0.8, y: (y / 100) * 1.1 });
    // e.target.style.width = "40rem";
    e.target.parentNode.style.transform = `perspective(200px) rotateX(${mouseYClass}) rotateY(${mouseXClass})`;
    // e.target.parentNode.style.transform = `perspective(200px) rotateX(var(--mouse-varx)) rotateY(var(--mouse-vary))`;
    e.target.parentNode.style.setProperty(mouseYClass, y + "deg");
    e.target.parentNode.style.setProperty(mouseXClass, x + "deg");
  };
  // var(--mouse-varx)

  leave = (e, mouseYClass, mouseXClass) => {
    e.preventDefault();
    e.target.parentNode.style.transition =
      " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
    e.target.style.setProperty(mouseYClass, 0 + "deg");
    e.target.style.setProperty(mouseXClass, 0 + "deg");
    // e.target.parentNode.style.transform = `perspective(0px) rotateX(5deg) rotateY(var(--mouse-varx))`;
  };

  render() {
    return (
      <Container id="content-4">
        <div className="page-container">
          <Icon name="long arrow alternate left" className="icon back" />
          <div className="page">
            <div
              className="hobby-container-first river"
              // onMouseMove={(e) =>
              //   this.mouseCoords(e, "--mouse-vary", "--mouse-varx")
              // }
              // onMouseEnter={this.enter}
              // onMouseLeave={(e) =>
              //   this.leave(e, "--mouse-vary", "--mouse-varx")
              // }
            >
              <img
                src={river}
                alt="river"
                className="photography2"
                id="river"
              />
              <span className="pic-name">- River of Solitude</span>
            </div>

            <div
              className="hobby-container-second stairwell"
              // onMouseMove={(e) =>
              //   this.mouseCoords(e, "--mouse-vary-sec", "--mouse-varx-sec")
              // }
              // onMouseEnter={this.enter}
              // onMouseLeave={(e) =>
              //   this.leave(e, "--mouse-vary-sec", "--mouse-varx-sec")
              // }
            >
              <img
                src={stairwell}
                alt="stairwell"
                className="photography"
                id="stairwell"
              />
              <span className="pic-name stairwell">- Plummeting Descent</span>
            </div>
          </div>
          <div className="page right ">
            <div
              className="hobby-container-second fire"
              // onMouseMove={(e) =>
              //   this.mouseCoords(e, "--mouse-vary-sec", "--mouse-varx-sec")
              // }
              // onMouseEnter={this.enter}
              // onMouseLeave={(e) =>
              //   this.leave(e, "--mouse-vary-sec", "--mouse-varx-sec")
              // }
            >
              <img src={fire} alt="fire" className="photography" id="fire" />
              <span className="pic-name fire">- Flame of Enlightenment</span>
            </div>
            <div
              className="hobby-container-first road"
              // onMouseMove={(e) =>
              //   this.mouseCoords(e, "--mouse-vary", "--mouse-varx")
              // }
              // onMouseEnter={this.enter}
              // onMouseLeave={(e) =>
              //   this.leave(e, "--mouse-vary", "--mouse-varx")
              // }
            >
              <img src={road} alt="road" className="photography2" id="road" />
              <span className="pic-name road">- Boulevard of Fortune</span>
            </div>
          </div>
          <Icon name="long arrow alternate right" className="icon next" />
        </div>
        <div className="cover-container hidden">
          <div className="cover"></div>
          <div className="cover"></div>
        </div>
      </Container>
    );
  }
}
export default Hobbies;
