import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 80%;
  height: 50%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const FloatingLink = styled.div`
  width: 100%;
  height: 2.2rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 1.85rem 0;
  justify-self: center;
  //   align-self: center;
  // border-left: 2.5px solid black;
  text-align: center;
`;
const NavContainer = () => {
  return (
    <Container>
      <SubContainer>
        <Link to="/">
          <FloatingLink>About</FloatingLink>
        </Link>
        <Link to="/projects">
          <FloatingLink>Projects</FloatingLink>
        </Link>
        <Link to="/skills">
          <FloatingLink>Skills</FloatingLink>
        </Link>
        <Link to="/hobbies">
          <FloatingLink>Hobbies</FloatingLink>
        </Link>
      </SubContainer>
    </Container>
  );
};

export default NavContainer;
