import { useState } from "react";
import { postComment } from "./app";

const CommentForm = ({ article_id, comments, setComments }) => {
  const [newComment, setNewComment] = useState({ username: "", body: "" });
  const [addingComment, setAddingComment] = useState(false);
  const [hasAddedComment, setHasAddedComment] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAddingComment(true);
    setHasAddedComment(false);
    postComment(article_id, newComment).then((comment) => {
      setAddingComment(false);
      setHasAddedComment(true);
      setComments([comment, ...comments]);
      setNewComment({ username: "", body: "" });
    });
  };

  return (
    <>
      <h3>Add comment:</h3>
      <form id="comment-form">
        <label htmlFor="username-input">Name:</label>
        <br />
        <input
          type="text"
          id="username-input"
          name="username"
          onChange={handleChange}
          value={newComment.username}
          required
        />
        <br />
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
      {addingComment ? <p>Adding your comment...</p> : null}
      {hasAddedComment ? <p>Comment successfully added!</p> : null}
    </>
  );
};

export default CommentForm;
