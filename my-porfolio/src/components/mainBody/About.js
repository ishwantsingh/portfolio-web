import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/bgImage.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1.5px solid #e1e0e0;
  border-left: 1.5px solid #e1e0e0;
  background-color: #f9f9f9;
  font-size: 7rem;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
// const DevImg = styled.image`
//   width: 100%;
//   height: 100%;
// `;

const About = () => {
  return (
    <Container>
      {/* <DevImg src={bgImage} alt="background image" /> */}
      About
    </Container>
  );
};

export default About;
