import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import { CounterContext } from './Context/Counter'


function App() {
  
  const counterState = useContext(CounterContext);

  console.log("Context", counterState);

  return (
    <>
      <div className='App'>
       <h1>Count is {counterState.count}</h1>
       <Counter/>
       <Counter/>
       <Counter/>
      </div>
    
    </>
  )
}

export default App
