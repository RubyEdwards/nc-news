import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../app";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((fetchedComments) => {
      setComments(fetchedComments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading comments...</p>;
  } else if (!comments.length) {
    return <p>No comments yet</p>;
  } else {
    return (
      <section id="comment-list">
        <h4>Comments:</h4>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    );
  }
};

export default CommentList;
