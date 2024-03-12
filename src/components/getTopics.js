import axios from "axios";


function getTopics() {
    return axios
    .get("https://nc-news-h3wi.onrender.com/api/topics")
    .then((response) => {
        return response.data.topics
    })
}


export default getTopics