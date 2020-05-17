import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 5em;
`;
const SubContainer = styled.div`
  width: 70%;
  height: 20%;
  flex-direction: column;
  wrap-content: wrap;
  justify-content: center;
  align-items: center;
`;
const FloatingLink = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const FloatingSocials = () => {
  return (
    <Container>
      <SubContainer>
        <FloatingLink>Linkedin</FloatingLink>
        <FloatingLink>Twitter</FloatingLink>
        <FloatingLink>G-mail</FloatingLink>
        <FloatingLink>Github</FloatingLink>
      </SubContainer>
    </Container>
  );
};

export default FloatingSocials;
