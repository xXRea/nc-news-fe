import './ArticleCard.css'
import { Link } from 'react-router-dom'

function ArticleCard ({article}) {
   const {title, author, created_at, article_img_url} = article
   return (
    <>
    <Link to = {`/article/${article.article_id}`}>
    <h3>{article.title}</h3></Link>
     <p> {article.author}</p>
     <p> {article.created_at} </p>
    <img src={article.article_img_url} className='article-img'/>
    </>
   )
}

export default ArticleCard;


