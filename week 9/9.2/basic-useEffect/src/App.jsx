import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount(){
    // setCount(count+1);
    setCount(c=>c+1);
  }

  function decreaseCount(){
    // setCount2(count2-1);
    setCount2(c=>c-1);
  }

  return (
    <>
      <div>
        <Counter count={count} count2={count2}/>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </>
  )


  function Counter(props){

    useEffect(function(){
      // when clicking on the btn this is logged on rendering of the component 
      console.log("mount");

      // this one is logged on btn click since we unmount the earlier ones 
      return function(){
        console.log("unmount");
      }
    },[]);

    useEffect(function(){
      // when clicking on the btn this is logged on rendering of the component 
      console.log("count has changed");

      // this one is logged on btn click since we unmount the earlier ones 
      return function(){
        console.log("cleanup inside the second cleanup");
      }
    },[]);

    return <div>
      Counter1 {props.count} <br/>
      Counter2 {props.count2} <br/>
    </div>
  
  }
}

export default App
