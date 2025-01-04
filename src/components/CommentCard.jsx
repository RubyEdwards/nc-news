import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { deleteComment } from "../api";
const CommentCard = ({ comment, comments, setComments, user }) => {
  const { comment_id, body, author, votes, created_at } = comment;
  const [isCorrectUser, setIsCorrectUser] = useState(false);
  const [isDeletingComment, setIsDeletingComment] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user === author) {
      setIsCorrectUser(true);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDeletingComment(true);
    setError(null);
    deleteComment(comment_id)
      .then(() => {
        setIsDeletingComment(false);
        setComments([
          ...comments.filter((comment) => comment.comment_id !== comment_id),
        ]);
      })
      .catch((err) => {
        setIsDeletingComment(false);
        setError("Comment not deleted, please try again later");
      });
  };

  return (
    <div id="comment-card">
      <p>
        {body} <b>- {author}</b>
      </p>
      <p>Posted at {formatDate(created_at)}</p>
      <p>{votes} votes</p>
      <p>Comment no. {comment_id}</p>
      {isCorrectUser ? (
        <button type="submit" onClick={handleClick}>
          DELETE COMMENT
        </button>
      ) : null}
      {isDeletingComment ? <p>Deleting your comment...</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CommentCard;
