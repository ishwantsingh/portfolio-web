import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TimelineMax, Power1 } from "gsap/all";

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
`;
// #e1e0e0
const SubContainer = styled.div`
  width: 90%;
  flex-direction: column;
  align-items: space-between;
  align-self: flex-end;
  margin: auto 0;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-weight: bold;
    font-size: 1.4rem;
    border-left: 1.5px solid black;
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
    border-left: 4px solid black !important;
    border-radius: 2.8px !important;
    font-weight: bold;
    margin: 1.7rem 0;
    height: 2.8rem;
    font-size: 1.4rem; //becuase it is below floating-link class, this font size applies
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
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
      // transformOrigin: "right",
      // scaleX: 0,
      x: 500,
      delay: 3.7,
      ease: Power1.easeIn,
    });
    this.timeline.play();
  }

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
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="selected-menu"
            className="floating-link"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            activeClassName="selected-menu"
            className="floating-link"
          >
            Skills
          </NavLink>
          <NavLink
            to="/hobbies"
            activeClassName="selected-menu"
            className="floating-link"
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
