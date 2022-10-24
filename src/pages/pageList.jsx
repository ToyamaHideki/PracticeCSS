import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkTitle = styled(Link)`
  text-decoration: none;
  display: block;
  font-weight: 600;
  transition: all 0.3s;
  &:hover {
    color: red;
  }
`;

const LinkList = styled.section`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <LinkList>
      <LinkTitle to="/neonbtn">NEON BUTTON PAGE</LinkTitle>
      <LinkTitle to="/styled_components">STYLED_COMPONENTS</LinkTitle>
    </LinkList>
  );
};

export default Home;
