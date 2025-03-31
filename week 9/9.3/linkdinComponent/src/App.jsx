import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostComponent } from './Post'

function App() {
  const [posts, setPosts] = useState([])

  const postComponent = posts.map(post=><PostComponent 
  key={post.name}  // Adding a key for list rendering
  name={post.name}
  subtitle={post.subtitle}
  time={post.time}
  image={post.image}
  desc={post.desc}
  />)

  function addPost(){
    setPosts([...posts,{
      name:"Harsh",
      subtitle:"1000000 followers",
      time:"2 m ago",
      image:"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"remember why you started"
    }])
  }


  return (
      <div style={{background:"#dfe6e9", height:"100vh", }}>
       <button onClick={addPost}>Add post</button>
       <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          {postComponent}
        </div>
       </div>
      </div>

  )
}

export default App
