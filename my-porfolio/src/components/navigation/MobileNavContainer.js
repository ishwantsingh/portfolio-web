import React from "react";
import styled from "styled-components";
import { TimelineMax, Quint, Power2, Power1 } from "gsap/all";

const SubContainer = styled.div`
  width: 100%;
  height: 5rem;
  z-index: 10;
  display: none;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-bottom: 1px solid #F3F3F3;
  .name {
    font-size: 2rem;
    font-family: "Prata", serif;
    margin-left: 10%;
  }
  i.huge.icons {
    height: 2.5rem;
    font-size: 2.5em;
    color: #303030;
  }
  .burger-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-self: center;
      justify-content: space-evenly;
      height: 40px;
      width: 80px;
  }
  .bar {
    height: 5px;
    width: 35px;
    border-radius: 6px;
    background: linear-gradient(239.07deg, #454545 1.07%, #222222 100%);
   }
  @media (max-width: 950px) {
    display: flex !important;
`;

const MobileNavContainer = () => {
  const openMenu = (e) => {
    e.preventDefault();
    let navMenu = document.getElementById("content");

    navMenu.style.setProperty("display", "flex");
    navMenu.style.setProperty("width", "100%");

    return new Promise((resolve, reject) => {
      let menuTimeline = new TimelineMax({ onComplete: resolve });
      menuTimeline
        .to(".bar-one", 0.23, {
          ease: Power1.easeIn,
          y: "11px",
        })
        .to(
          ".bar-three",
          0.23,
          {
            ease: Power1.easeIn,
            y: "-11px",
          },
          "<"
        )
        .to(
          ".bar-two",
          0.2,
          {
            ease: Power1.easeIn,
            scaleX: 0,
          },
          "<"
        )
        .to(".bar-one", 0.3, {
          ease: Power2.easeOut,
          rotate: "-45%",
        })
        .to(
          ".bar-three",
          0.3,
          {
            ease: Power2.easeOut,
            rotate: "45%",
          },
          "<"
        );
    });
  };
  // closeMenu = () => {
  //   if (matchMedia) {
  //     const mq = window.matchMedia("(min-width: 951px)");
  //     mq.addListener(WidthChange);
  //     WidthChange(mq);
  //   }
  //   function WidthChange(mq) {
  //     if (mq.matches) {
  //       document.getElementById("content").style.display = "flex";
  //       document.getElementById("content").style.width = "15%";
  //     } else {
  //       document.getElementById("content").style.width = "0%";
  //       document.getElementById("content").style.display = "none";
  //     }
  //   }
  // };
  return (
    <SubContainer>
      <div className="name">Ishwant Singh</div>
      {/* <Icon name="bars" color="black" size="huge" className="icons" /> */}
      <div className="burger-menu" onClick={(e) => openMenu(e)}>
        <div className="bar bar-one"></div>
        <div className="bar bar-two"></div>
        <div className="bar bar-three"></div>
      </div>
    </SubContainer>
  );
};

export default MobileNavContainer;
