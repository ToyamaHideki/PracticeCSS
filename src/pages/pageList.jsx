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

const SectionTitle = styled.h2`
  font-size: 1.3rem;
`;

const Home = () => {
  return (
    <LinkList>
      <SectionTitle>BUTTON</SectionTitle>
      <LinkTitle to="/neonbtn">ネオンボタン</LinkTitle>
      <LinkTitle to="/japansebtn">和柄風ボタン</LinkTitle>
      <LinkTitle to="/colorbtn">カラフルボタン(aタグで作成)</LinkTitle>

    </LinkList>
  );
};

export default Home;
