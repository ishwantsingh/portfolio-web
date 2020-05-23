import React from "react";
import styled from "styled-components";
import { Icon, Menu } from "semantic-ui-react";

const SubContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  align-self: flex-end;
  margin-right: 0.5rem;
  margin-bottom: 0.6rem;
  i.huge.icons {
    font-size: 3.5em;
  }
  i.huge.icons:hover {
    font-size: 3.8em;
  }
`;

const FloatingImp = () => {
  return (
    <SubContainer>
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

export default FloatingImp;
