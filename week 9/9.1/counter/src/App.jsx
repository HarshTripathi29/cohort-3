import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Agenda
// 1. How to run some logic on mounting 
// 2. How to run some logic on re-render
// 3. How to run some logic on unmounting
// mounting, re-rendering, unmounting
function App() {
  // 1. define the state varibales
  // count is initialized only once during the first render 
  // the component may re render multiple times but this state's initial value wont change
  const [count, setCount] = useState(0)


  // running on every render => after 10 secs
  console.log("counter");

  // loads on mounting => run this logic only when the component mounts\
  // guard the setInterval from re-renders
  // does not matters how many times it renders. setInterval runs only once 

  useEffect(function(){
    setInterval(function(){
    //  setCount(count=>count+1)
    //  here why we are defining a function instead of just passing the state change.
    //  => for some reasons related to the dependency array
    setCount(function(count){
      console.log("inside the setInterval");
      return count+1;
    })
    },10000)
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
