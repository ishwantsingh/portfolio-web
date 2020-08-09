import React from "react";
import styled from "styled-components";
import { Icon, Menu } from "semantic-ui-react";

const SubContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: flex-end;
  align-self: flex-end;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  i.huge.icons {
    height: 4rem;
    font-size: 3.5em;
    text-shadow: 0px 4px 10px #d0d0d0;
    color: #303030;
  }
  i.huge.icons:hover {
    font-size: 3.8em;
    text-shadow: 0px 0px 0px #ffffff;
  }
  @media (max-height: 750px) {
    i.huge.icons {
      height: 3.2rem;
      font-size: 2.8em;
    }
    i.huge.icons:hover {
      font-size: 3.1em;
    }
  }
  @media only screen and (max-width: 950px) {
    margin-bottom: 5rem;
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
