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
  margin-right: 0.4rem;
  margin-top: 0.4rem;
  i.huge.icons {
    height: 4rem;
    font-size: 3.6em;
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
    </SubContainer>
  );
};

export default FloatingSocials;
