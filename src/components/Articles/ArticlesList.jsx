import { useState, useEffect } from 'react'
import getArticles from '../getArticles'
import ArticleCard from './ArticleCard'
import FancyArticleBox from '../FancyArticleBox/FancyArticleBox'


function ArticlesList() {
    const [articles, setArticles] = useState([])


    useEffect(() => {
       getArticles().then((articles) => {
        setArticles(articles)
       })
        }, [])
    
    return <section> 
            <h2> Displaying All Available Articles </h2>
            {articles.map((article) => (
                <FancyArticleBox key={article.article_id}>
                    <ArticleCard article={article}/>
                </FancyArticleBox>
            ))}
        </section>
    ;
}
          
               
             
             

  

export default ArticlesList;



