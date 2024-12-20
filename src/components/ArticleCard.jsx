import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
const ArticleCard = ({ article }) => {
  const { author, title, article_id, topic, created_at, votes, comment_count } =
    article;

  return (
    <div id="article-card">
      <h3>{title}</h3>
      <p id="author">by {author}</p>
      <ul id="article-info">
        <li>Topic: {topic}</li>
        <li>Posted at {formatDate(created_at)}</li>
        <li>{votes} votes</li>
        <li>{comment_count} comments</li>
      </ul>
      <div id="center-article-button">
        <Link id="article-link" to={`/articles/${article_id}`}>
          READ THIS ARTICLE
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
