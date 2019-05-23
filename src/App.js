import React from 'react';
import styled from 'styled-components'
import ButtonSwicher from './components/button-switch'
import Aside from './components/aside'
import 'styled-components/macro'


const AsideWrapper = styled.div`
  height:500px;
`

function App() {
  return (
    <>

    <ButtonSwicher
    firstChoice = 'Choice 1'
    secondChoice = 'Choice 2'
    />


<AsideWrapper>
    <Aside 
    width="800px"
    bgColor="red"
    css="background-color: red"
    />
    </AsideWrapper>


    </>
  );
}

export default App;
