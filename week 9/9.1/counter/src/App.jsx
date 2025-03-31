import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 1. define the state varibales
  const [count, setCount] = useState(0)

  // loads on mounting
  useEffect(function(){
    setInterval(function(){
    //   setCount(count=>count+1)
    // here why we are defining a function instead of just passing the state change.
    //  => for some reasons related to the dependency array
    setCount(function(count){
      return count+1;
    })
    },1000)
    console.log("mounted");
  },[]);

  // 2. define the function to handle the state changes
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0);
  }



  // 3. the component renders based on the state 
  return (
    <>
      <div>
        <h1>Counter app</h1>
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
     
    </>
  )
}

export default App
