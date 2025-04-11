import { useState, useEffect } from "react";
import "./App.css";

// The main App component
function App() {
  // `counterVisible` determines whether the <Counter /> component is shown or not
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    // This interval toggles the visibility of the Counter component every 5 seconds
    const interval = setInterval(() => {
      setCounterVisible((prev) => !prev); // Toggle true/false
      console.log("Toggling counter visibility");
    }, 5000);

    // Cleanup: clear the interval when the App component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array: this effect runs only once (on mount)

  return (
    <>
      <div>
        {/* Render the Counter component only if counterVisible is true */}
        {counterVisible && <Counter />}
        hello
      </div>
    </>
  );
}

// Counter component: shows a number that increases every second
function Counter() {
  // `count` holds the current value of the counter
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This interval increments the counter every second
    const clock = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Cleanup: clear the interval when the Counter component unmounts
    return () => clearInterval(clock);
  }, []); // This effect runs only once when the component is first rendered

  return (
    <div>
      <h1 id="text">{count}</h1>
      {/* Button to manually increase the count */}
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}

export default App;
