import { useEffect, useState } from "react";
import getComments from "../getComments";

function Comments(article_id) {
  const [commentList, setCommentsList] = useState([]);

  useEffect(() => {
  console.log(article_id)
    getComments(article_id).then((commentsFromApi) => {
      console.log(commentsFromApi)
      setCommentsList(commentsFromApi);
    });
  }, []);

  return (
    <section>
      <h4> Comments </h4>
      <ol className="Comments-list">
        {commentList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Comments;
