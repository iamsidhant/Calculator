import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'

function App() {

  return (
  <div>
    <Wrapper>
      <Screen />
        <ButtonBox>
          <Button>
            <h1>App</h1>
          </Button>
        </ButtonBox>
    </Wrapper>
  </div>
  )
}

export default App
