const CommentCard = ({ comment }) => {
  const { comment_id, body, author, votes, created_at } = comment;

  const date = new Date(created_at);
  let min = date.getMinutes();
  let hr = date.getHours();
  const dd = date.getDate();
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  min = min < 10 ? `0${min}` : min;
  hr = hr < 10 ? `0${hr}` : hr;
  const dateStr = `${hr}:${min} ${dd}/${mm}/${yy}`;

  return (
    <div id="comment-card">
      <p>
        {body} - {author}
      </p>
      <p>Posted at {dateStr}</p>
      <p>{votes} votes</p>
      <p>Comment no. {comment_id}</p>
    </div>
  );
};

export default CommentCard;
