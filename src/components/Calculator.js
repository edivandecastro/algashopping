import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract } from '../store/Calculator/Calculator.actions'

function Calculator() {
  const dispatch = useDispatch()
  const result = useSelector(state => state.calculator)

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return <>
    <div>
      <input type="text" placeholder="a" onChange={e => setA(Number(e.target.value)) } />
      <input type="text" placeholder="b" onChange={e => setB(Number(e.target.value)) } />
    </div>
    <div>
      <button onClick={() => { dispatch(sum(a,b)) }} >Somar</button>
      <button onClick={() => { dispatch(subtract(a,b)) }} >Subtrair</button>
    </div>
    <div>
      { result }
    </div>
  </>
}

export default Calculator
