import React, { useState } from 'react';
import styled from 'styled-components'
import 'styled-components/macro'

const Wrapper = styled.div`
width: ${props => props.width};
padding:30px;
height:100%;
display:inline-block;
background-color: ${props => props.bgColor};
`
const WrapperHeadline = styled.h2`
text-align:center;
`






const Aside = (props) => {
    const [switcherValue, setSwitcherValue] = useState(props.firstChoice);
    return (
        <Wrapper>
            <WrapperHeadline>
                {props.width}, 
                {props.bgColor}
            </WrapperHeadline>
    </Wrapper>
    );
}

export default Aside;