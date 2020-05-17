import React from "react";
import styled from "styled-components";
import { Icon, Menu } from "semantic-ui-react";

const Container = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 2em;
`;
const SubContainer = styled.div`
  width: 50%;
  height: 30%;
  flex-direction: column;
  wrap-content: wrap;
  justify-content: center;
  align-items: space-between;
  .icons {
    margin: 0.5rem auto;
  }
`;
// const FloatingLink = styled.div`
//   width: 50%;
//   margin: 0 auto;
// `;
const FloatingSocials = () => {
  return (
    <Container>
      <SubContainer>
        <Menu.Item
          href="https://www.linkedin.com/in/ishwant-singh/"
          position="left"
          target="_blank"
        >
          <Icon
            link
            name="linkedin"
            color="black"
            size="huge"
            className="icons"
          />
        </Menu.Item>
        <Menu.Item
          href="https://twitter.com/ishwant_singh"
          position="left"
          target="_blank"
        >
          <Icon
            link
            name="twitter"
            color="black"
            size="huge"
            className="icons"
          />
        </Menu.Item>
        <Menu.Item href="ishwant2001@gmail.com" position="left" target="_blank">
          <Icon link name="mail" color="black" size="huge" className="icons" />
        </Menu.Item>
        <Menu.Item
          href="https://github.com/ishwantsingh"
          position="left"
          target="_blank"
        >
          <Icon
            link
            name="github"
            color="black"
            size="huge"
            className="icons"
          />
        </Menu.Item>
      </SubContainer>
    </Container>
  );
};

export default FloatingSocials;
