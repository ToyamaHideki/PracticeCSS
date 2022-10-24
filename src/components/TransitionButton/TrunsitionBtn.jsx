import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const BackHomeBtn = styled(Link)`
display: block;
`;

const TrunsitionBtn = () => {
  return (
   <>
   <BackHomeBtn to="/">
     TOP PAGE 
     </BackHomeBtn>
   </>
  )
}

export default TrunsitionBtn;