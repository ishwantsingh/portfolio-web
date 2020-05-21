import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import FloatingSocials from "../socials/FloatingSocials";

const Container = styled.div`
  width: 17.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-content: center;
`;
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
    border-left: 4px solid black;
    border-radius: 3.2px;
    font-weight: bold;
    margin: 1.7rem 0;
    height: 2.8rem;
    font-size: 1.4rem; //becuase it is below floating-link class, this font size applies
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavContainer = () => {
  return (
    <Container>
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
      <FloatingSocials />
    </Container>
  );
};

export default NavContainer;
