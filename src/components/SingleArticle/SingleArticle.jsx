import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getArticleById from "../getArticleById";
import "./SingleArticle.css";
import Comments from "../Comments/Comments.jsx";

function singleArticle() {
  const { article_id } = useParams();
  console.log(article_id);
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div id="single-article">
      <h3> {article.title} </h3>
      <p> Created By: {article.author}</p>
      <p> Posted on: {article.created_at}</p>
      <img id="single-article-img" src={article.article_img_url} />
      <p> {article.body} </p>
      <Comments article_id={article_id} />
    </div>
  );
}

export default singleArticle;
