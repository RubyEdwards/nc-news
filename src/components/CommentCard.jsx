import { formatDate } from "../utils";

const CommentCard = ({ comment }) => {
  const { comment_id, body, author, votes, created_at } = comment;

  return (
    <div id="comment-card">
      <p>
        {body} <b>- {author}</b>
      </p>
      <p>Posted at {formatDate(created_at)}</p>
      <p>{votes} votes</p>
      <p>Comment no. {comment_id}</p>
    </div>
  );
};

export default CommentCard;
