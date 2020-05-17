import React from "react";
import styled from "styled-components";
// import Link from "react-router-dom";

const Container = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  font-size: 1.1rem;
  margin: 1.75rem 0;
  justify-self: center;
  //   align-self: center;
  border-left: 2px solid black;
  text-align: center;
`;
const NavContainer = () => {
  return (
    <Container>
      <SubContainer>
        <FloatingLink>About</FloatingLink>
        <FloatingLink>Projects</FloatingLink>
        <FloatingLink>Skills</FloatingLink>
        <FloatingLink>Socials</FloatingLink>
      </SubContainer>
    </Container>
  );
};

export default NavContainer;
