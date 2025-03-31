import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  const[currentTab, setCurentTab] = useState(1);
  const[tabData, setTabData] = useState({});
  const[loading, setLoading] = useState(true);

  useEffect(function(){
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res=>{
      const json=await res.json();
      setTabData(json);
      setLoading(false);
    })
  },[currentTab]);

  return  <div>
    <button onClick={function(){
      setCurentTab(1)
    }} style={{
      color:currentTab==1?"red":"black"
    }}> Todo #1</button>

<button onClick={function(){
      setCurentTab(2)
    }} style={{
      color:currentTab==2?"red":"black"
    }}> Todo #2</button>
  
  
  <button onClick={function(){
    setCurentTab(3)
  }} style={{
    color:currentTab==3?"red":"black"
  }}> Todo #3</button>

<button onClick={function(){
      setCurentTab(4)
    }} style={{
      color:currentTab==4?"red":"black"
    }}> Todo #4</button>
  
<br/>
{loading?"Loading...":tabData.title}

</div>
  
}

export default App


