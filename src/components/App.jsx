import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import '../App.css'
import Nav from "./Navigation/Nav"
import Home from "./Home"
import TopicsList from "./Topics/TopicsList"
import ArticlesList from "./Articles/ArticlesList"
import getTopics from "./getTopics"

function App() {
  const [user, setUser] = useState([
    {
    "username": "tickle122",
    "name": "Tom Tickle",
    "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
    }
  ])


  const [topics, setTopics] = useState([])
  useEffect(() => {
    getTopics(topics).then((topic) => {
     setTopics(topic)
    })
     }, [topics])

  return (
    <>
     <Nav/>
     <Routes>
      <Route
      path="/"
      element={<Home/>}
      ></Route>
      <Route
      path="/topics"
      element={<TopicsList topics = {topics} setTopics = {setTopics}/>}
      ></Route>
      <Route 
      path='/all-articles'
      element={<ArticlesList/>}
      ></Route>
     </Routes>
    </>
  )
}

export default App
