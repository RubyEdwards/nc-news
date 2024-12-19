import { useState } from "react";
import { postComment } from "../app";

const CommentForm = ({ article_id, comments, setComments, user }) => {
  const [newComment, setNewComment] = useState({
    username: user,
    body: "",
  });

  const [isAddingComment, setIsAddingComment] = useState(false);
  const [hasAddedComment, setHasAddedComment] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsAddingComment(true);
    setHasAddedComment(false);
    setError(null);
    postComment(article_id, newComment)
      .then((comment) => {
        setIsAddingComment(false);
        setHasAddedComment(true);
        setTimeout(() => {
          setHasAddedComment(false);
        }, 1200);
        setComments([comment, ...comments]);
        setNewComment({ username: user, body: "" });
      })
      .catch((err) => {
        setIsAddingComment(false);
        setError("Comment not added, please try again later");
      });
  };

  return (
    <>
      <h3>Add comment:</h3>
      <form id="comment-form">
        <p>Name: {user}</p>
        <label htmlFor="comment-body-input">Comment: </label>
        <br />
        <textarea
          type="text"
          id="comment-body-input"
          name="body"
          rows="3"
          cols="30"
          onChange={handleChange}
          value={newComment.body}
          required
        />
        <br />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      {isAddingComment ? <p>Adding your comment...</p> : null}
      {hasAddedComment ? <p>Comment successfully added!</p> : null}
      {error ? <p>{error}</p> : null}
    </>
  );
};

export default CommentForm;
