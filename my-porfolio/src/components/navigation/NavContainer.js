import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

const Container = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SubContainer = styled.div`
  width: 75%;
  flex-direction: column;
  align-items: space-between;
  align-self: flex-end;
  margin: auto 0;
  // margin-bottom: 0;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-weight: bold;
    font-size: 1.4rem;
  }
  .floating-link {
    display: flex;
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    margin: 2.5rem 0;
    justify-content: center;
    align-items: center;
  }
  .selected-menu {
    border-left: 4px solid black;
    border-radius: 3.2px;
    font-weight: bold;
    margin: 1.7rem 0;
    height: 2.8rem;
    font-size: 1.4rem; //becuase it is below floating-link class, this font size applies
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;
const SubContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  .icons {
    margin: 0.75rem auto;
  }
`;
const SubContainer3 = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
const NavContainer = () => {
  return (
    <Container>
      <SubContainer>
        <NavLink
          exact
          to="/"
          activeClassName="selected-menu"
          className="floating-link"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          activeClassName="selected-menu"
          className="floating-link"
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          activeClassName="selected-menu"
          className="floating-link"
        >
          Skills
        </NavLink>
        <NavLink
          to="/hobbies"
          activeClassName="selected-menu"
          className="floating-link"
        >
          Hobbies
        </NavLink>
      </SubContainer>
      <SubContainer3>
        <Menu.Item
          href="https://www.linkedin.com/in/ishwant-singh/"
          position="right"
          target="_blank"
        >
          <Icon name="linkedin" color="black" size="huge" className="icons" />
        </Menu.Item>
        <Menu.Item
          href="https://twitter.com/ishwant_singh"
          position="right"
          target="_blank"
        >
          <Icon name="twitter" color="black" size="huge" className="icons" />
        </Menu.Item>
        <Menu.Item
          href="mailto:ishwant2001@gmail.com"
          position="right"
          target="_blank"
        >
          <Icon name="mail" color="black" size="huge" className="icons" />
        </Menu.Item>
        <Menu.Item
          href="https://github.com/ishwantsingh"
          position="right"
          target="_blank"
        >
          <Icon name="github" color="black" size="huge" className="icons" />
        </Menu.Item>
      </SubContainer3>
      {/* <SubContainer3>hello</SubContainer3> */}
      {/* <SubContainer2>
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
      </SubContainer2> */}
    </Container>
  );
};

export default NavContainer;
