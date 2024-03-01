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
    const resetClick = () => {
      setCalc({
        sign: "",
        num: 0,
        res: 0
      })
    }

    // user click number
    const handleClickButton = () => {
      const numberString = value.toString()

      let numberValue;
      if (numberString == '0' && calc.num == 0) {
        numberValue = "0"
      } else {
        numberValue = Number(calc.num + numberString)
      }

      setCalc({
        ...calc,
        num: numberValue
      })
    }

    const signClick = () => {}

    const equalsClick = () => {}

    const percentClick = () => {
      setCalc({
        num: (calc.num / 100),
        res: (calc.res / 100),
        sign: ''
      })
    }
    
    const invertClick = () => {
      setCalc({
        num: calc.num ? calc.num * -1 : 0,
        res: calc.res ? calc.res * -1 : 0,
        sign: ''
      })
    }

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
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button
