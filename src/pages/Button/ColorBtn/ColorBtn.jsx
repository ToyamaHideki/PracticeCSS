import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColorBtn = () => {
  return (
    <Section>
      <LinkTitle>
        <SpanContainer>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </SpanContainer>
        <SpanText>PUSH</SpanText>
      </LinkTitle>
    </Section>
  );
};

export default ColorBtn;

const Section = styled.section`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const LinkTitle = styled(Link)`
  width: 300px;
  height: 64px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 30px;
  box-shadow: 0px 0px 16px -6px rgba(0, 0, 0, 0.6);
  transition:all 0.5s;
  /* 完成時にコメントを外す */
  /* overflow: hidden; */

  :before {
    position: absolute;
    content: "";
    background-color: #acacac6b;
    width: 80px;
    height: 30px;
    border-radius: 30px;
    display: none;
  }

  /* ホバー時の挙動は全てこの中に記載していく */
  :hover {
    box-shadow: 0 0 4px 0px #ab13fc99;

    span:before{
        transform:translateY(120px);
    }
    span:after{
        transform:translateY(-90px);
    }
  }
`;

const SpanContainer = styled.div`
  width: 80%;
  height: 400%;
  display: flex;
  flex-direction: row;
  transform: rotate(45deg);
  & span {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* 共通項目 */
  & span:before, & span:after{
    position: absolute;
        content:"";
  }

  span:nth-child(1){
    :before{
        width: 30px;
        height: 100px;
        border-radius: 30px;
        background-color: purple;
    }
    :after{
        bottom: -50%;
        right: 0;
        width: 20px;
        height: 100px;
        border-radius: 30px;
        background-color:orange;
        z-index: 10;
    }
  }
`;

const SpanText = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-weight: 600;

`;
