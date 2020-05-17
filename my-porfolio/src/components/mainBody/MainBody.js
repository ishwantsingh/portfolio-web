import React from "react";
import styled from "styled-components";
// import Link from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1.5px solid #e1e0e0;
  border-left: 1.5px solid #e1e0e0;
  background-color: #f9f9f9;
`;

const MainBody = () => {
  return <Container>Main Body</Container>;
};

export default MainBody;
