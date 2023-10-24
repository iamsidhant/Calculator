import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-4 grid-row-6'>
      <div className='output'>
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button>AC</button>
      <button>DEL</button>
      <button>=</button>
    </div>
    </>
  )
}

export default App
