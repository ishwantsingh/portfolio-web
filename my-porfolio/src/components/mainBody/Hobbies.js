import React from "react";
import styled from "styled-components";
import { TimelineMax, Power1, Quint } from "gsap/all";
import history from "../../history";
import { Icon } from "semantic-ui-react";

import river from "../../assets/river.jpeg";
import stairwell from "../../assets/stairwell.jpeg";
import fire from "../../assets/fire.jpeg";
import road from "../../assets/road.jpeg";

import sky from "../../assets/sky.jpeg";
import leaf from "../../assets/leaf.jpeg";
import painting2 from "../../assets/painting2.jpeg";
import painting1 from "../../assets/painting1.jpeg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    z-index: 2;
  }
  .page.left {
    background-color: white;
  }
  .page.right {
    background-color: white;
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
    box-shadow: 10px 10px 24px #e1e0e0;
  }
  .photography2 {
    display: block;
    width: 27vw;
    height: 20vw;
    margin: 1vw auto;
    box-shadow: 6px 10px 24px #e1e0e0;
  }

  .hobby-container-first {
    --mouse-vary: 0deg;
    --mouse-varx: 0deg;
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: 0.9;
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
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    display: flex;
    z-index: 5000;
  }
  .revealer {
    width: 50%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .cover-left {
    border-right: 1px solid #f0f0f0;
  }
  .cover-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translate3d(100%,0,0);
  }
  .cover {
    display: block;
    width: 50%;
    height: 100%;
    background-color: #EDE8E4;
    will-change: transform;
  }
  .cover1 {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(100%,0)
  }
  .cover2 {
    width: 50%;
    z-index: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(100%,0)
  }
  .hidden {
    display: none;
  }
  .icon.back {
    display: flex;
    top: 50%;
    left: 0.7%;
    margin: 0;
    z-index: 2;
    position: absolute;
    font-size: 2.2rem;
    color: #505050;
  }
  .icon.next {
    display: flex;
    top: 50%;
    right: 0.7%;
    margin: 0;
    z-index: 2;
    position: absolute;
    font-size: 2.2rem;
    color: #505050;
  }
  i.icon:hover {
    cursor: pointer;
    font-size: 2.33rem;
    text-shadow: 0px 0px 0px #ffffff;
    color: #101010;
  }
  i.icon.disabled:hover {
    font-size: 2.2rem ;
    color: #505050;
    cursor: default;
  }
  .hobby-name {
    width: 10rem;
    font-size: 1.28rem;
    height: 2rem;
    display: block;
    box-sizing: border-box;
    color: #999999;
    font-weight: bold;
  }
  .hobby-name-left {
    position: relative;
    top: -15.25%;
    left: 48.3% !important;
    z-index: 2;
    transform: rotate(270deg);
  }
  .hobby-name-right {
    position: relative;
    top: -5.2%;
    right: 48.5% !important;
    z-index: 3;
    transform: rotate(90deg);
  }

  // box-shadow: rgba(0, 0, 0, 0.3) 7px 8px 10px 2px;
 // box-shadow: rgba(0, 0, 0, 0.3) 2px 5px 11px 4px;
}
}
`;

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 600,
      y: 600,
      currentPage: 1,
    };
    this.timeline = new TimelineMax({ paused: true });

    this.pagesWrap = "";

    // All the turning pages.
    this.pages = {};
  }

  componentDidMount() {
    this.timeline.from("#content-4", 1.5, {
      autoAlpha: 0,
      delay: 0,
      ease: Power1.easeIn,
    });
    this.timeline.play();
    let left = document.querySelector(".cover-left");
    let right = document.querySelector(".cover-right");
    console.log(left);
    this.pagesWrap = {
      left: left,
      right: right,
    };
    let pagesHTML = "";
    const colors = ["#f6f6f6", "#f0f0f0", "#e3e3e3", "#d7d7d7", "#d0d0d0"];
    for (let i = 0; i <= 4; ++i) {
      const color = colors[i] || colors[0];
      pagesHTML += `<div class="cover-inner" style="background-color:${color};"></div>`;
    }
    this.pagesWrap.left.innerHTML = this.pagesWrap.right.innerHTML = pagesHTML;
    this.pages = {
      left: Array.from(this.pagesWrap.left.querySelectorAll(".cover-inner")),
      right: Array.from(this.pagesWrap.right.querySelectorAll(".cover-inner")),
    };
  }

  changePage = (e, destination) => {
    e.preventDefault();
    this.timeline.reverse();
    const timelineDuration = this.timeline.duration() * 1000;
    setTimeout(() => {
      history.push(destination);
    }, timelineDuration);
  };

  nextPicturePage = (e) => {
    e.preventDefault();
    let pic1 = document.querySelector(".pic1");
    let pic2 = document.querySelector(".pic2");
    let pic3 = document.querySelector(".pic3");
    let pic4 = document.querySelector(".pic4");

    let picName1 = document.querySelector(".pic-name-1");
    let picName2 = document.querySelector(".pic-name-2");
    let picName3 = document.querySelector(".pic-name-3");
    let picName4 = document.querySelector(".pic-name-4");

    let hobbyNameRight = document.querySelector(".hobby-name-right");
    let hobbyNameLeft = document.querySelector(".hobby-name-left");

    let show1 = () => {
      setTimeout(() => {
        pic1.setAttribute("src", sky);
        pic2.setAttribute("src", leaf);
        pic3.setAttribute("src", painting2);
        pic3.style.width = "23vw";
        pic4.setAttribute("src", painting1);

        hobbyNameRight.style.top = "-7%";

        picName1.innerHTML = "- Blue over Green";
        picName2.innerHTML = "- Aging Leaves";
        picName3.innerHTML = "- World in Pink";
        picName3.style.width = "23vw";
        picName4.innerHTML = "- Calm and Chaos";

        hobbyNameRight.innerHTML = "__painting";
        hobbyNameLeft.innerHTML = "";

        this.setState({ currentPage: 2 });
      }, 1050);
    };

    return new Promise((resolve, reject) => {
      const pagesLeft = this.pages["left"];
      this.transitionTimeline = new TimelineMax({ onComplete: resolve });

      for (let i = 0; i <= 0; i++) {
        const page = pagesLeft[i];
        this.transitionTimeline.to(
          page,
          1.8,
          {
            ease: Quint.easeInOut,
            startAt: { x: "100%" },
            x: "-100%",
          },
          0.15
        );
      }
      const pagesRight = this.pages["right"];
      for (let i = 0; i <= 0; i++) {
        const page = pagesRight[i];
        this.transitionTimeline.to(
          page,
          1.8,
          {
            ease: Quint.easeInOut,
            startAt: { x: "100%" },
            x: "-100%",
          },
          0.15
        );
      }
      // this.transitionTimeline.to(
      //   ".cover-inner",
      //   1.6,
      //   {
      //     ease: Quint.easeInOut,
      //     startAt: { x: "100%" },
      //     x: "-100%",
      //   },
      //   0.15
      // );
      this.transitionTimeline.play().eventCallback(show1());
    });
    // let hide = () => {
    //   setTimeout(() => {
    //     //     cover2.style.zIndex = 1;
    //   }, 1000);
    // };
    // hide();
  };

  backPicturePage = (e) => {
    e.preventDefault();
    let pic1 = document.querySelector(".pic1");
    let pic2 = document.querySelector(".pic2");
    let pic3 = document.querySelector(".pic3");
    let pic4 = document.querySelector(".pic4");

    let picName1 = document.querySelector(".pic-name-1");
    let picName2 = document.querySelector(".pic-name-2");
    let picName3 = document.querySelector(".pic-name-3");
    let picName4 = document.querySelector(".pic-name-4");

    let hobbyNameRight = document.querySelector(".hobby-name-right");
    let hobbyNameLeft = document.querySelector(".hobby-name-left");

    let show1 = () => {
      setTimeout(() => {
        pic1.setAttribute("src", river);
        pic2.setAttribute("src", stairwell);
        pic3.setAttribute("src", fire);
        pic3.style.width = "13vw";
        pic4.setAttribute("src", road);

        hobbyNameRight.style.top = "-5.2%";

        picName1.innerHTML = "- River of Solitude";
        picName2.innerHTML = "- Plummeting Descent";
        picName3.innerHTML = "- Flames of Enlightenment";
        picName3.style.width = "13vw";
        picName4.innerHTML = "- Boulevard of Fortune";

        hobbyNameRight.innerHTML = "";
        hobbyNameLeft.innerHTML = "__photography";

        this.setState({ currentPage: 1 });
      }, 1050);
    };
    return new Promise((resolve, reject) => {
      const pagesLeft = this.pages["left"];
      this.transitionTimeline2 = new TimelineMax({ onComplete: resolve });
      for (let i = 0; i <= 0; i++) {
        const page = pagesLeft[i];
        this.transitionTimeline2.to(
          page,
          1.8,
          {
            ease: Quint.easeInOut,
            startAt: { x: "-100%" },
            x: "100%",
          },
          0.15
        );
      }
      const pagesRight = this.pages["right"];
      for (let i = 0; i <= 0; i++) {
        const page = pagesRight[i];
        this.transitionTimeline2.to(
          page,
          1.8,
          {
            ease: Quint.easeInOut,
            startAt: { x: "-100%" },
            x: "100%",
          },
          0.15
        );
      }

      // this.transitionTimeline.to(
      //   ".cover-inner",
      //   1.6,
      //   {
      //     ease: Quint.easeInOut,
      //     startAt: { x: "-100%" },
      //     x: "100%",
      //   },
      //   0.15
      // );
      this.transitionTimeline2.play().eventCallback(show1());
    });
    // let hide = () => {
    //   setTimeout(() => {
    //     //     cover2.style.zIndex = 1;
    //   }, 1000);
    // };
    // hide();
  };

  enter = (e) => {
    e.preventDefault();
    let enterY = e.clientY;
    let enterX = e.clientX; //// PROBLEM WITH COMPARING W ENTER COORDINATES
    this.setState({ enterY: enterY, enterX: enterX });
    // e.target.style.transition =
    //   " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
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
    // e.target.parentNode.style.transition =
    //   " all 400ms cubic-bezire(0.03, 0.98, 0.52, 0.99) 0s";
    e.target.style.setProperty(mouseYClass, 0 + "deg");
    e.target.style.setProperty(mouseXClass, 0 + "deg");
    // e.target.parentNode.style.transform = `perspective(0px) rotateX(5deg) rotateY(var(--mouse-varx))`;
  };

  render() {
    return (
      <Container id="content-4">
        <div className="page-container">
          <div className="page left">
            <div
              className="hobby-container-first river"
              onMouseMove={(e) =>
                this.mouseCoords(e, "--mouse-vary", "--mouse-varx")
              }
              onMouseEnter={this.enter}
              onMouseLeave={(e) =>
                this.leave(e, "--mouse-vary", "--mouse-varx")
              }
            >
              <img
                src={river}
                alt="river"
                className="photography2 pic1"
                id="river"
              />
              <span className="pic-name pic-name-1">- River of Solitude</span>
            </div>

            <div
              className="hobby-container-second stairwell"
              onMouseMove={(e) =>
                this.mouseCoords(e, "--mouse-vary-sec", "--mouse-varx-sec")
              }
              onMouseEnter={this.enter}
              onMouseLeave={(e) =>
                this.leave(e, "--mouse-vary-sec", "--mouse-varx-sec")
              }
            >
              <img
                src={stairwell}
                alt="stairwell"
                className="photography pic2"
                id="stairwell"
              />
              <span className="pic-name stairwell pic-name-2">
                - Plummeting Descent
              </span>
            </div>
            <span className="hobby-name hobby-name-left">__photography</span>
          </div>
          <Icon
            name="long arrow alternate left"
            className="icon back"
            onClick={this.backPicturePage}
            disabled={this.state.currentPage === 1 ? true : false}
          />
          <div className="page right ">
            <div
              className="hobby-container-second fire"
              onMouseMove={(e) =>
                this.mouseCoords(e, "--mouse-vary-sec", "--mouse-varx-sec")
              }
              onMouseEnter={this.enter}
              onMouseLeave={(e) =>
                this.leave(e, "--mouse-vary-sec", "--mouse-varx-sec")
              }
            >
              <img
                src={fire}
                alt="fire"
                className="photography pic3"
                id="fire"
              />
              <span className="pic-name fire pic-name-3">
                - Flames of Enlightenment
              </span>
            </div>
            <div
              className="hobby-container-first road"
              onMouseMove={(e) =>
                this.mouseCoords(e, "--mouse-vary", "--mouse-varx")
              }
              onMouseEnter={this.enter}
              onMouseLeave={(e) =>
                this.leave(e, "--mouse-vary", "--mouse-varx")
              }
            >
              <img
                src={road}
                alt="road"
                className="photography2 pic4"
                id="road"
              />
              <span className="pic-name road pic-name-4">
                - Boulevard of Fortune
              </span>
            </div>
            <span className="hobby-name hobby-name-right"></span>
          </div>
          <Icon
            name="long arrow alternate right"
            className="icon next"
            onClick={this.nextPicturePage}
            disabled={this.state.currentPage === 2 ? true : false}
          />
        </div>
        <div className="cover-container">
          <div className="revealer cover-left">
            <div
              className="cover-inner"
              style={{ backgroundColor: "#f6f6f6" }}
            ></div>
            <div
              className="cover-inner"
              style={{ backgroundColor: "#f0f0f0" }}
            ></div>{" "}
            <div
              className="cover-inner"
              style={{ backgroundColor: "#e3e3e3" }}
            ></div>{" "}
            <div
              className="cover-inner"
              style={{ backgroundColor: "#d7d7d7" }}
            ></div>
          </div>
          <div className="revealer cover-right">
            <div
              className="cover-inner"
              style={{ backgroundColor: "#f6f6f6" }}
            ></div>
            <div
              className="cover-inner"
              style={{ backgroundColor: "#f0f0f0" }}
            ></div>{" "}
            <div
              className="cover-inner"
              style={{ backgroundColor: "#e3e3e3" }}
            ></div>{" "}
            <div
              className="cover-inner"
              style={{ backgroundColor: "#d7d7d7" }}
            ></div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Hobbies;
