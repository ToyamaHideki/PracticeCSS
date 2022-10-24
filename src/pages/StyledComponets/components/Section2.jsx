import React from 'react'
import styled from "styled-components";

const Section =styled.section``;
const Title   = styled.h1`
font-size:2rem;
`;
const Button  = styled.button``;

const Section2 = () => {
    return (
        <Section>
           <Title>スタイルの継承</Title>
           <Button>Button</Button>
        </Section>
    )
}

export default Section2;