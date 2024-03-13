import axios from "axios";


function getArticleById (article_id) {
    return axios
  .get(`https://nc-news-h3wi.onrender.com/api/articles/${article_id}`)
  .then(response => {
    return response.data.articles
})
  
}
 


export default getArticleById
