import React from "react";
import styled from "styled-components";
import { TimelineMax, Power2, Power1 } from "gsap/all";

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

const MobileNavContainer = (props) => {
  let menuTimeline = new TimelineMax({ paused: true });
  const openMenu = (e) => {
    e.preventDefault();

    props.toggleMenuState();

    let navMenu = document.getElementById("content");

    navMenu.style.setProperty("display", "flex");
    navMenu.style.setProperty("width", "100%");

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
      .to(".bar-one", 0.23, {
        ease: Power2.easeOut,
        rotate: "-45%",
      })
      .to(
        ".bar-three",
        0.23,
        {
          ease: Power2.easeOut,
          rotate: "45%",
        },
        "<"
      );
    menuTimeline.play();
  };

  const closeMenu = (e) => {
    e.preventDefault();

    props.toggleMenuState();

    let navMenu = document.getElementById("content");

    navMenu.style.setProperty("display", "none");
    navMenu.style.setProperty("width", "0%");

    menuTimeline
      .to(".bar-one", 0.2, {
        ease: Power2.easeOut,
        rotate: "0%",
      })
      .to(
        ".bar-three",
        0.2,
        {
          ease: Power2.easeOut,
          rotate: "0%",
        },
        "<"
      )
      .to(".bar-one", 0.2, {
        ease: Power1.easeIn,
        y: "0px",
      })
      .to(
        ".bar-three",
        0.2,
        {
          ease: Power1.easeIn,
          y: "0px",
        },
        "<"
      )
      .to(
        ".bar-two",
        0.17,
        {
          ease: Power1.easeIn,
          scaleX: 1,
          delay: 0.03,
        },
        "<"
      );
    menuTimeline.play();
  };

  return (
    <SubContainer>
      <div className="name">Ishwant Singh</div>
      <div
        className="burger-menu"
        onClick={!props.menuIsOpened ? (e) => openMenu(e) : (e) => closeMenu(e)}
      >
        <div className="bar bar-one"></div>
        <div className="bar bar-two"></div>
        <div className="bar bar-three"></div>
      </div>
    </SubContainer>
  );
};

export default MobileNavContainer;
