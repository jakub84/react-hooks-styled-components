import React, { useState } from 'react';
import styled from 'styled-components'

const RadioWrapper = styled.div`
text-align:center;
`
const RadioButton = styled.label`
background-color: aqua;
padding:20px;
cursor: pointer;
margin: 0 5px;
display:inline-block;
width: 200px;

`
const HiddenInput = styled.input`
    display:none;
    &:checked {
       & + ${RadioButton} {
        background-color: red;
       }
    }
`






const ButtonSwicher = (props) => {
    const [switcherValue, setSwitcherValue] = useState(props.firstChoice);
    return (
        <RadioWrapper>
            <HiddenInput
                type="radio"
                id="first"
                name="drone"
                value={props.firstChoice}
                checked={switcherValue === props.firstChoice}
                onChange={e => setSwitcherValue(e.target.value)} />
            <RadioButton htmlFor="first">{props.firstChoice}</RadioButton>

            <HiddenInput
                type="radio"
                id="second"
                name="drone"
                value={props.secondChoice}
                checked={switcherValue === props.secondChoice}
                onChange={e => setSwitcherValue(e.target.value)}
            />
            <RadioButton htmlFor="second">{props.secondChoice}</RadioButton>

            <p>Button value: {switcherValue} </p>
        </RadioWrapper>
    );
}

export default ButtonSwicher;