import './ArticleCard.css'

function ArticleCard ({article}) {
   const {title, author, created_at, article_img_url} = article
   return (
    <>
    <h3>{article.title}</h3>
     <p> {article.author}</p>
     <p> {article.created_at} </p>
    <img src={article.article_img_url} className='article-img'/>
    </>
   )
}

export default ArticleCard;

