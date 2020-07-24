import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const SubContainer = styled.div`
  width: 100%;
  height: 5rem;
  z-index: 10;
  display: none;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-bottom: 1px solid #F3F3F3;
  .name {
    font-size: 1.5rem;
    font-family: "Prata", serif;
    margin-left: 10%;
  }
  i.huge.icons {
    height: 2.5rem;
    font-size: 2.5em;
    color: #303030;
  }
  @media (max-width: 950px) {
    display: flex !important;
`;

const MobileNavContainer = () => {
  return (
    <SubContainer>
      <div className="name">Ishwant Singh</div>
      <Icon name="bars" color="black" size="huge" className="icons" />
    </SubContainer>
  );
};

export default MobileNavContainer;
