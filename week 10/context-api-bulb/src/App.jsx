import { useState, createContext, useContext } from 'react';
import './App.css';

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}> 
      <Light />
    </BulbContext.Provider>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);

  return <div>{bulbOn ? "bulb on" : "bulb off"}</div>;
}

function LightSwitch() {  // ✅ Removed unnecessary props
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn(prev => !prev); // ✅ Correct way to toggle state
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
