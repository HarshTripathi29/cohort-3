import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

// const[count, setCount]=useState(0);
const [counterVisible,setCounterVisible]=useState(true);

// the counter should appear for 5 secs then should disappear 
useEffect(function(){
  setInterval(function(){
    setCounterVisible(c=>!c)
    console.log("inside the app useeffect");
  },5000);
},[])

  return (
    <>
      <div>
      {/* conditional rendering  */}
      {/* {counterVisible?<Counter></Counter>:null} */}
      {/* mount it for 5 secs then unmount it for 5 secs */}
      {counterVisible && <Counter></Counter>}
      hello

      </div>
      
    </>
  )
}

  // mounting , re-rendering , unmounting

  // whenever this counter is rendered a clock is started
  // whenever the counter is mounted the clock is created 
  // but did you ever stopped the clock when the component unmounted ?

function Counter(){
   const[count, setCount]=useState(0);

   console.log("counter");

  //  setInterval(function(){
  //   console.log("from outside the useEffect");
  //   setCount(count=>count+1);
  // },1000);

   useEffect(function(){

    // when the component mounts 
    let clock =  setInterval(function(){
      console.log("from inside the useEffect");
      setCount(count=>count+1);
      // setCount(function(count){
      //   count+1;
      // })
    },1000);
    
    // when the component unmounts => manual cleanup => stop the clcok.
    return function(){
      clearInterval(clock);
    }

   },[]) // dependency array, cleanup, fetch inside useEffect

   function increaseCount(){
    setCount(count+1);
   }

   return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
   </div>
   
}

export default App
