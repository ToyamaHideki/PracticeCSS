import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TrunsitionBtn from "../../components/TransitionButton/TrunsitionBtn";


const Section = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(22, 1, 42);       
    font-family: 'Anton', sans-serif;      
`;


const LinkTitle = styled(Link)`
  position: relative;
  padding: 15px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 24px;
  font-weight: 600;
  overflow: hidden;
  transition:all 0.1s;
  text-decoration: none;
  color: #ffffff31;
  

  &:hover {
    background: #5d778d7f;
    box-shadow: 0px 0px 40px -16px rgba(242, 242, 242, 0.6), 7px 0px 39px 29px rgba(58, 226, 255, 0.26), 0px 0px 20px 0px #49bac4,2px 0px 23px -6px rgba(248, 248, 248, 0.6) inset;
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
    transition-delay: 1s;
    color: white;
    transform: translate(-2px,-2px);
    border-radius: 50px;
  }

& span {
    position: absolute;
    display: block;
}

& span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #2196f3);
}

&:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
}


& span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #2196f3);
}

&:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
}

& span:nth-child(2) {
    top: -100%;
    right: 0%;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #2196f3);
}

&:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;

}

& span:nth-child(4) {
    bottom: -100%;
    left: 0%;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #2196f3);
}

&:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
}



`;

const NeonBtn = () => {
  return (
    <Section>
      <LinkTitle to="/neonbtn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        neon Button
      </LinkTitle>
      <br />

      <TrunsitionBtn></TrunsitionBtn>
    </Section>
  );
};

export default NeonBtn;
