import { useState, useEffect } from 'react'
import './App.css'

/**
 * App Component
 * -------------
 * This component uses the custom `useFetch` hook to fetch and display
 * a post from a public API. The post can be switched using buttons.
 */
function App() {
  const [currentPost, setCurrentPost] = useState(1); // State to track which post to fetch

  // Use the custom hook to fetch the current post data.
  // The URL is dynamically constructed based on `currentPost`.
  // The hook is also given a retry interval of 50 seconds.
  const { finalData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost,
    50
  );

  // While data is being fetched, show a loading indicator
  if (loading) {
    return <div>Loading ...</div>
  }

  // Render buttons to switch posts and display the fetched post data
  return (
    <>
      <div>
        <button onClick={() => { setCurrentPost(1) }}>Post 1</button>
        <button onClick={() => { setCurrentPost(2) }}>Post 2</button>
        <button onClick={() => { setCurrentPost(3) }}>Post 3</button>
        {JSON.stringify(finalData)}
      </div>
    </>
  )
}

/**
 * Custom Hook: useFetch
 * ---------------------
 * This hook takes a `url` and a `retryTime` (in seconds) as input.
 * It performs a fetch request to retrieve data from the URL and returns:
 * - `finalData`: the JSON data fetched from the API
 * - `loading`: a boolean indicating whether the fetch is in progress
 * 
 * Features:
 * - Automatically fetches data whenever the URL changes.
 * - Re-fetches the data every `retryTime` seconds to keep it fresh.
 */
function useFetch(url, retryTime) {
  const [finalData, setFinalData] = useState({}); // State to hold fetched data
  const [loading, setLoading] = useState(true);   // State to manage loading status

  // Function to perform the fetch and update state accordingly
  async function getDetails() {
    setLoading(true); // Start loading
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json); // Update the data
    setLoading(false);  // Stop loading
  }

  // useEffect to fetch data on initial render and every time `url` changes
  useEffect(() => {
    getDetails(); // Fetch new data based on updated URL
  }, [url]);

  // useEffect to set up a periodic refetch every `retryTime` seconds
  useEffect(() => {
    const intervalId = setInterval(getDetails, retryTime * 1000); // Set interval
    return () => clearInterval(intervalId); // Clean up on unmount or `retryTime` change
  }, [retryTime, url]);

  // Return the data and loading state so the component can use them
  return {
    finalData,
    loading
  }
}

export default App;
