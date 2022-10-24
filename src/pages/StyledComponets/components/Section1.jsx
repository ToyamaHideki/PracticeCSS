import React from 'react'
import styled from "styled-components";


const Text = styled.p`
font-weight:600;
`;

const TitleText =styled(Text)`
margin:0;
font-size:2rem;
`;

const Section = styled.section`
background-color:#999999;
`;

const Title = styled.h1`
font-size: 1.5rem;
text-align: center;
margin:0;
padding:10px;
color: ${props => props.className ? props.className : "black"};
background-color: ${props => props.primary ? "none": "blue"}    
    `;

const Section1 = () => {
    return (
        <Section>
            <TitleText>同じ属性に別々のスタイルを適応する方法</TitleText>
            <Text>クラス、引数なし</Text>
            <Title>
                StyledComponents
            </Title>
            <Text>クラス、引数あり</Text>
            <Title primary className="blue">
                StyledComponents
            </Title>
        </Section>
    )
}

export default Section1