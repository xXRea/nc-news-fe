import axios from "axios"

function getComments({article_id}) {
    return axios
    .get(`https://nc-news-h3wi.onrender.com/api/articles/${article_id}/comments`).then((response) => {
         return response.data.comments
    })
}

export default getComments;