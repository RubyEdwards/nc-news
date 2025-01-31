import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import Card from "react-bootstrap/Card";

const ArticleCard = ({ article }) => {
  const {
    title,
    author,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
    article_id,
  } = article;

  return (
    <Card id="card">
      <Card.Img variant="top" src={article_img_url} />
      <Card.Body>
        <Card.Title>
          <big>{title}</big>
        </Card.Title>
        <Card.Text>
          <small className="text-muted">by {author}</small>
          <ul id="article-info">
            <li>Topic: {topic}</li>
            <li>Posted at {formatDate(created_at)}</li>
            <li>{votes} votes</li>
            <li>{comment_count} comments</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <Link to={`/articles/${article_id}`}>READ THIS ARTICLE</Link>
      </Card.Footer>
    </Card>
  );
};

export default ArticleCard;
