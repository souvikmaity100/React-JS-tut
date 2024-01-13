import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(7)


  // let counter = 9 

  const addValue = ()=> {
    counter++;
    setCounter(counter)
    console.log(counter);
  }
  const removeValue = ()=> {
    if (counter > 0) { 
      setCounter((prevCounter)=> prevCounter - 1)
      setCounter(prevCounter => prevCounter - 1)
      // setCounter(counter - 1)
      // setCounter(counter - 1)
      console.log(counter);
    }
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button>
      <button onClick={removeValue}>Remove value : {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
