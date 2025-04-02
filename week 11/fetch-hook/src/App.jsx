import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const[currentPost, setCurrentPost]=useState(1);

  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);


  return (
    <>
      <div>
       <button onClick={()=>{setCurrentPost(1)}}>Post 1 </button>
       <button onClick={()=>{setCurrentPost(2)}}>Post 2 </button>
       <button onClick={()=>{setCurrentPost(3)}}>Post 3 </button>
        {JSON.stringify(finalData)}
      </div>
    </>
  )
}


  // useFetch hook would rake a url as an input and return the json or any other data

function useFetch(url){

  const[finalData, setFinalData]=useState({});

  async function getDetails(){
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(function(){
    getDetails();
  },[url]);

  return {
    finalData
  }
}

export default App
