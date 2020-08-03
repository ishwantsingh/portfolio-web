import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TimelineMax, Power1, Power2 } from "gsap/all";

import FloatingSocials from "../socials/FloatingSocials";
import FloatingImp from "../socials/FloatingImp";

const Container = styled.div`
  width: 16vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-content: center;
  border-left: 1.3px dashed #e1e0e0;
  z-index: 10 !important;
  background-color: white;
  @media (max-height: 875px) {
    padding: 1rem 0 1rem 0;
  }
  @media (max-width: 950px) {
    display: none;
    position: absolute;
    top: 5rem;
    left: 0;
    width: 0%;
    height: calc(100% - 5rem);
  }
`;

const SubContainer = styled.div`
  width: 80%;
  flex-direction: column;
  align-items: space-between;
  align-self: center;
  margin: auto 0;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .floating-link {
    display: flex;
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    margin: 2.5rem 0;
    justify-content: center;
    align-items: center;
  }
  .selected-menu {
    border-left: 0 !important;
    background: linear-gradient(239.07deg, #484848 1.07%, #000000 100%);
    border-radius: 6px !important;
    line-height: 28px;
    color: #ffffff;
    font-weight: 600;
    margin: 1.7rem 0;
    height: 40px;
    font-size: 1.3rem; //becuase it is below floating-link class, this font size applies
    box-shadow: 0px 10px 24px #e1e0e0;
  }
  .selected-menu:hover {
    font-size: 1.3rem;
  }
  @media (max-height: 750px) {
    width: 70%;
    .floating-link {
      height: 1.5rem;
      font-size: 1.05rem;
    }
    .selected-menu {
      height: 30px;
      font-size: 1.15rem;
    }
    .selected-menu:hover {
      font-size: 1.15rem;
    }
  }
`;

class NavContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline.from("#content", 1, {
      autoAlpha: 0,
      x: 500,
      delay: 3.7,
      ease: Power1.easeIn,
    });
    this.timeline.play();
  }

  closeMenu = () => {
    if (matchMedia) {
      const mq = window.matchMedia("(min-width: 951px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }
    function WidthChange(mq) {
      if (mq.matches) {
        document.getElementById("content").style.display = "flex";
        document.getElementById("content").style.width = "15%";
      } else {
        document.getElementById("content").style.width = "0%";
        document.getElementById("content").style.display = "none";
      }
    }

    this.props.toggleMenuState();

    let menuTimeline = new TimelineMax({ paused: true });
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

  render() {
    return (
      <Container id="content">
        <FloatingSocials />
        <SubContainer>
          <NavLink
            exact
            to="/"
            activeClassName="selected-menu"
            className="floating-link"
            onClick={this.closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="selected-menu"
            className="floating-link"
            onClick={this.closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            activeClassName="selected-menu"
            className="floating-link"
            onClick={this.closeMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/hobbies"
            activeClassName="selected-menu"
            className="floating-link"
            onClick={this.closeMenu}
          >
            Hobbies
          </NavLink>
        </SubContainer>
        <FloatingImp />
      </Container>
    );
  }
}

export default NavContainer;
