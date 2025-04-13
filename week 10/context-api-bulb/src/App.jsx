import { useState, createContext, useContext } from 'react';
import './App.css';

// ✅ 1. Create a Context for the bulb state
// This creates a context object which can hold and provide data (like a global state)
const BulbContext = createContext();

function App() {
  // ✅ 2. Create state for bulb (on/off)
  const [bulbOn, setBulbOn] = useState(true);

  return (
    // ✅ 3. Wrap components with the Context Provider
    // The Provider component allows any nested components to access the value provided (bulbOn and setBulbOn)
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      <Light />
    </BulbContext.Provider>
  );
}

function Light() {
  // ✅ 4. The Light component renders the LightBulb and the LightSwitch
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  // ✅ 5. Access context using useContext (this is the **consumer** part)
  // This allows us to "consume" or use the context values
  const { bulbOn } = useContext(BulbContext);

  // ✅ 6. Render based on the context value
  return <div>{bulbOn ? "bulb on" : "bulb off"}</div>;
}

function LightSwitch() {
  // ✅ 7. Also consume the context here to get and update the bulb state
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  // ✅ 8. Toggle the state when button is clicked
  function toggle() {
    setBulbOn(prev => !prev); // toggle bulb on/off
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
