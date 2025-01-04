import { useState } from "react";
import { postComment } from "../api";

const CommentForm = ({ article_id, comments, setComments, user }) => {
  const [newComment, setNewComment] = useState({
    username: user,
    body: "",
  });

  const [isAddingComment, setIsAddingComment] = useState(false);
  const [hasAddedComment, setHasAddedComment] = useState(false);
  const [isError, setisError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsAddingComment(true);
    setHasAddedComment(false);
    setisError(null);
    if (newComment.body.length < 5) {
      setIsAddingComment(false);
      setisError(
        "Comments must be at least 5 characters long, please try again"
      );
    } else {
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
          setisError("Comment not added, please try again later");
        });
    }
  };

  return (
    <>
      <h3>Add comment:</h3>
      <form id="comment-form">
        <p>Name: {user}</p>
        <label htmlFor="comment-body-input">Comment: (5-300 characters)</label>
        <br />
        <textarea
          type="text"
          id="comment-body-input"
          name="body"
          rows="3"
          cols="30"
          onChange={handleChange}
          value={newComment.body}
          minLength={5}
          maxLength={300}
        />
        <br />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      {isAddingComment ? <p>Adding your comment...</p> : null}
      {hasAddedComment ? <p>Comment successfully added!</p> : null}
      {isError ? <p>{isError}</p> : null}
    </>
  );
};

export default CommentForm;
