import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/bgImage.svg";
import SvgDevProd from "../../assets/devProd.js";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  border-right: 1px solid #e1e0e0;
  border-left: 1px solid #e1e0e0;
  background-color: #ffffff;
  font-size: 7rem;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  .imageDiv {
    width: 35%;
    height: 40vh;
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    margin: 3rem 0 0 3rem;
  }
  .image {
    width: 25vw;
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
  }
`;

// DAF8FF f9f9f9

const About = () => {
  return (
    <Container>
      <div className="imageDiv">
        <SvgDevProd className="image" />
      </div>
    </Container>
  );
};

export default About;
