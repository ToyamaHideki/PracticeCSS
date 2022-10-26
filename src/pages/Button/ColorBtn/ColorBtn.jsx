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
          <div></div>
        </SpanContainer>
        <SpanText>PUSH</SpanText>
      </LinkTitle>
    </Section>
  );
};

export default ColorBtn;

const CPalet = {
  primary: "rgb(255, 137, 27)",
  primarySub: "#FD6D0C",
  secondary: "#00A1DC",
  secondarySub: "#50C6F8",
  accent: "#9000F0",
  backbtn: "rgb(251, 251, 251)",
};

const Wsize = {
  ss: "30%",
  smd: "40%",
  md: "50%",
  mlg: "60%",
  lg: "70%",
};

const Section = styled.section`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const SpanText = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-weight: 600;
  z-index: 30;
`;


const LinkTitle = styled(Link)`
  width: 300px;
  height: 64px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: ${CPalet.backbtn};
  border-radius: 30px;
  box-shadow: 0px 0px 10px 1px rgba(195, 195, 195, 0.6);
  /* 完成時にコメントを外す */
  overflow: hidden;
  transition: all 0.5s;

  &:before {
    position: absolute;
    content: "";
    background-color: #ececec6b;
    width: 80px;
    height: 30px;
    border-radius: 30px;
    z-index: 20;
    display: none;
  }

  /* ホバー時の挙動は全てこの中に記載していく */
  &:hover {
    border: 1px solid ${CPalet.accent};
    box-shadow: 0 0 4px 0px ${CPalet.secondarySub};

    &:before{
      display: inline-block;
    }

    span:nth-child(1):before {
      transform: translateY(40%);
    }
    span:nth-child(1):after {
      transform: translateY(-90%);
    }

    span:nth-child(2):before {
      transform: translateY(100%);
    }
    span:nth-child(2):after {
      transform: translateY(-190%);
    }

    span:nth-child(3):before {
      transform: translateY(155%);
    }
    span:nth-child(3):after {
      transform: translateY(-70%);
    }

    span:nth-child(4):before {
      transform: translateY(165%);
    }
    span:nth-child(4):after {
      transform: translateY(-900%);
    }

    span:nth-child(5):before {
      transform: translateY(140%);
    }
    span:nth-child(5):after {
      transform: translateY(-55%);
    }

    div:before {
      transform: translateY(-250%);
    }
    div:after {
      transform: translateY(150%);
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
  & span:before,
  & span:after,
  & div:before,
  & div:after {
    position: absolute;
    content: "";
    border-radius: 30px;
    transition: all 0.5s;
  }

  span:nth-child(1) {
    :before {
      top: 30%;
      width: ${Wsize.lg};
      height: 100px;
      background-color: ${CPalet.accent};
    }
    :after {
      bottom: -50%;
      right: 0;
      width: ${Wsize.md};
      height: 100px;
      background-color: ${CPalet.primary};
      z-index: 10;
    }
  }

  span:nth-child(2) {
    :before {
      width: ${Wsize.lg};
      height: 100px;
      right: -20%;
      background-color: ${CPalet.secondary};
    }
    :after {
      bottom: -40%;
      left: 10%;
      width: ${Wsize.lg};
      height: 100px;
      background-color: ${CPalet.secondarySub};
      z-index: 10;
    }
  }

  span:nth-child(3) {
    :before {
      width: 50%;
      height: 50%;
      top: -15%;
      left: 30%;
      border-radius: 30px;
      background-color: ${CPalet.primarySub};
    }
    :after {
      bottom: -20%;
      right: -20%;
      width: 20px;
      height: 100px;
      border-radius: 30px;
      background-color: ${CPalet.primary};
      z-index: 10;
    }
  }

  span:nth-child(4) {
    :before {
      top: -30%;
      right: -30%;
      width: ${Wsize.smd};
      height: 100px;
      border-radius: 30px;
      background-color: ${CPalet.secondarySub};
    }
    :after {
      bottom: 0%;
      right: -30%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${CPalet.accent};
      z-index: 10;
    }
  }

  span:nth-child(5) {
    :before {
      top: -40%;
      left: 120%;
      width: ${Wsize.lg};
      height: 100px;
      border-radius: 30px;
      background-color: ${CPalet.accent};
    }
    :after {
      bottom: 0%;
      left: 80%;
      width: ${Wsize.md};
      height: 150px;
      border-radius: 30px;
      background-color: ${CPalet.primary};
      z-index: 10;
    }
  }

  & div {
    :before {
      top: 110%;
      left: 20%;
      transform: translate(-50%, -50%), rotate(45deg);
      width: 30px;
      height: 30px;
      background-color: ${CPalet.accent};
    }
    :after {
      bottom: 80%;
      right: 35%;
      transform: translate(-50%, -50%), rotate(45deg);
      width: 40px;
      height: 40px;
      background-color: ${CPalet.primary};
    }
  }
`;

