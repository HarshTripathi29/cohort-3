import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible((prev) => !prev); // Toggle every 5 seconds
      console.log("Toggling counter visibility");
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div>
        {counterVisible && <Counter />}
        hello
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(clock); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}

export default App;
