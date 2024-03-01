import React from 'react'
import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
  const className = {
    '=': 'equals',
    '/': 'opt',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt'
  }
  return className[btn]
}

const Button = ({value}) => {
  const[calc, setCalc] = useContext(CalcContext);

  const handleBtnClick = () => {
    const commaClick = () => {}
    const resetClick = () => {}

    // user click number
    const handleClickButton = () => {}

    const signClick = () => {}

    const equalsClick = () => {}

    const percentClick = () => {}

    const invertClick = () => {}

    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': invertClick
    }
    if (results[value]) {
      return results[value]
    } else {
      return handleClickButton()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)}`}>{value}</button>
  )
}

export default Button
