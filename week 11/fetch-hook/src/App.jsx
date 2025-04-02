import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const[currentPost, setCurrentPost]=useState(1);

  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);

  if(loading){
    return <div>
      Loading ... 
    </div>
  }


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
  const[loading, setLoading]=useState(true);

  async function getDetails(){
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(function(){
    getDetails();
  },[url]);

  return {
    finalData,
    loading
  }
}

export default App
