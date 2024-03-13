import axios from "axios";

function getArticles(topics) {
    return axios
    .get(`https://nc-news-h3wi.onrender.com/api/articles?topic=${topics}`)
    .then((response) => {
       return response.data.articles
    })
}

 
export default getArticles
