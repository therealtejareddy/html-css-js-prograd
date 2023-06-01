import { useState } from 'react'
import './App.css'

function App() {
  const [firstInput, setFirstInput] = useState(null)
  const [secondInput, setSecondInput] = useState(null)
  const [result, setResult] = useState(null)

  return (
    <>
    <h2>Simple Calculator</h2>
      <div className="text-container">
        <input value={firstInput} onChange={e=>setFirstInput(e.target.value)} placeholder='Enter first value'></input>
        <input value={secondInput} onChange={e=>setSecondInput(e.target.value)} placeholder='Enter second value'></input>
        <h3>Result - {result}</h3>
      </div>
      <div className="btn-container">
        <button onClick={()=>setResult(parseFloat(firstInput)+parseFloat(secondInput))}>+</button>
        <button onClick={()=>setResult(parseFloat(firstInput)-parseFloat(secondInput))}>-</button>
        <button onClick={()=>setResult(parseFloat(firstInput)*parseFloat(secondInput))}>*</button>
        <button onClick={()=>setResult(parseFloat(firstInput)/parseFloat(secondInput))}>/</button>
      </div>
    </>
  )
}

export default App
