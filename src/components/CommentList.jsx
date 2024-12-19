import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getComments } from "../app";
import CommentForm from "./CommentForm";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("tickle122");

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((fetchedComments) => {
      setComments(fetchedComments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <CommentForm
          article_id={article_id}
          comments={comments}
          setComments={setComments}
          user={user}
        />
        <p>Loading comments...</p>
      </>
    );
  }

  if (!comments.length) {
    return (
      <>
        <CommentForm
          article_id={article_id}
          comments={comments}
          setComments={setComments}
          user={user}
        />
        <p>No comments yet</p>
      </>
    );
  }

  return (
    <>
      <CommentForm
        article_id={article_id}
        comments={comments}
        setComments={setComments}
        user={user}
      />
      <section id="comment-list">
        <h4>Comments:</h4>
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              comments={comments}
              setComments={setComments}
              user={user}
            />
          );
        })}
      </section>
    </>
  );
};

export default CommentList;
