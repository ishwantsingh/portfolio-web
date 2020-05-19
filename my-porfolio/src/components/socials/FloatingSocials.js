import React from "react";
import styled from "styled-components";
import { Icon, Menu } from "semantic-ui-react";

const SubContainer = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 0.75rem;
  .icons {
    margin-right: 10%;
    margin-left: 10%;
  }
`;

const FloatingSocials = () => {
  return (
    <SubContainer>
      <Menu.Item
        href="https://www.linkedin.com/in/ishwant-singh/"
        position="left"
        target="_blank"
      >
        <Icon name="linkedin" color="black" size="huge" className="icons" />
      </Menu.Item>
      <Menu.Item
        href="https://twitter.com/ishwant_singh"
        position="left"
        target="_blank"
      >
        <Icon name="twitter" color="black" size="huge" className="icons" />
      </Menu.Item>
      <Menu.Item
        href="mailto:ishwant2001@gmail.com"
        position="left"
        target="_blank"
      >
        <Icon name="mail" color="black" size="huge" className="icons" />
      </Menu.Item>
      <Menu.Item
        href="https://github.com/ishwantsingh"
        position="left"
        target="_blank"
      >
        <Icon name="github" color="black" size="huge" className="icons" />
      </Menu.Item>
    </SubContainer>
  );
};

export default FloatingSocials;
