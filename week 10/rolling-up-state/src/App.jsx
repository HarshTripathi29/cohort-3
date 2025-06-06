import { useState } from 'react'
import './App.css'

function App() {

  return <div>    
        <LightBulb/>   
      </div>
}


function LightBulb(){

  // while rolling up the state we may end up defining everything in the parent : Unoptimal re renders
  const[bulbOn, setBulbOn]= useState(true);
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn? "bulb on":"bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}){

  function toggle(){
    setBulbOn(!bulbOn);
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
