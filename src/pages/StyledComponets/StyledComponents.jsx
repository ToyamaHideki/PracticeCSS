import React from 'react'
import Section1 from './components/Section1';
import Section2 from './components/Section2';



const StyledComponents = () => {
    return (
        <>
            {/* クラスでスタイルの適応を変更する方法、propsの理解 */}
            <Section1 />
            <Section2 />
        </>
    )
}

export default StyledComponents;