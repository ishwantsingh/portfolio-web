import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;
const SubContainer = styled.div`
  width: 75%;
  height: 50%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .floating-link {
    display: flex;
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    margin: 2.5rem 0;
    justify-content: center;
    align-items: center;
    text-align: right;
  }
  .selected-menu {
    border-left: 4px solid black;
    border-radius: 3.2px;
    font-weight: bold;
    height: 3rem;
    font-size: 1.45rem; //becuase it is below floating-link class, this font size applies
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
    </Container>
  );
};

export default NavContainer;
