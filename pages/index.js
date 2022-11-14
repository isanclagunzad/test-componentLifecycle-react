import { useEffect, useState } from 'react'
import Input, { inputD } from '/components/Input'


const Home = () => {
  const [counter, setCounter] = useState(0)

  const addCount = () => {
    setCounter((incCount) => incCount + 1)
  }

  const subCount = () => {
      setCounter((decCount) => decCount - 1)
  }

  const [display, setDisplay] = useState(false)

  const toggleInput = () => {
    setDisplay(!display)
  }

  return (
    <>
      <button onClick={toggleInput}>Toggle Input</button>
      <br></br>
      <button onClick={addCount}>+</button>
      <span> {counter} </span>
      <button onClick={subCount}>-</button>
      <br></br>
      {display &&  <Input />}
      <br></br>
      {inputD}
    </>
  )
}

export default Home;