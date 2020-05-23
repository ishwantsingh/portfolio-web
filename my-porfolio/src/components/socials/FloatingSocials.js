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
  margin-top: 0.6rem;
  i.huge.icons {
    font-size: 3.6em;
  }
  i.huge.icons:hover {
    font-size: 3.8em;
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
