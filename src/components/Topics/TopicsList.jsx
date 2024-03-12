import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"


function TopicsList({topics, setTopics}) {
   return ( 
    <section>
        <ul className = 'topicsList'>
            {topics.map((topic) => (
                <p key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link> 
                </p>   
            ))}
        </ul>
    </section>
    )
}

export default TopicsList;
