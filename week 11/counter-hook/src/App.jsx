import { useState } from 'react'
import './App.css'

/**
 * Custom Hook: useCounter
 * ------------------------
 * This hook manages a counter state using React's useState.
 * It returns:
 * - `count`: the current value of the counter
 * - `increaseCount`: a function to increment the counter
 */
function useCounter(){
  const [count, setCount] = useState(0); // Initializes count to 0

  // Function to increase the count by 1
  function increaseCount(){
    setCount(count + 1);
  }

  // Return the count and the function to increase it
  return {
    count,
    increaseCount
  }
}

/**
 * Component: Counter
 * ------------------
 * Uses the `useCounter` custom hook to manage its own
 * independent counter state. When the button is clicked,
 * it calls `increaseCount` to update the counter.
 */
function Counter(){
  const { count, increaseCount } = useCounter(); // Use the custom hook

  return (
    <>
      <div>
        <button onClick={increaseCount}>Increase {count}</button>
      </div>
    </>
  )
}

/**
 * Component: App
 * --------------
 * Renders three independent Counter components.
 * Each one uses its own instance of the `useCounter` hook,
 * so they maintain separate count states.
 */
function App() {
  return (
    <>
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App
