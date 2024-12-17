import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const { author, title, article_id, topic, created_at, votes, comment_count } =
    article;

  const date = new Date(created_at);
  let min = date.getMinutes();
  let hr = date.getHours();
  const dd = date.getDate();
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  min = min < 10 ? `0${min}` : min;
  hr = hr < 10 ? `0${hr}` : hr;
  const dateStr = `${hr}:${min} ${dd}/${mm}/${yy}`;

  const handleClick = () => {
    navigate(`/articles/${article_id}`);
  };

  return (
    <div id="article-card">
      <h3>{title}</h3>
      <p id="author">by {author}</p>
      <ul id="article-info">
        <li>Topic: {topic}</li>
        <li>Posted at {dateStr}</li>
        <li>{votes} votes</li>
        <li>{comment_count} comments</li>
      </ul>
      <button type="button" onClick={handleClick}>
        READ THIS ARTICLE
      </button>
    </div>
  );
};

export default ArticleCard;
