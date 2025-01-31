import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const TopicCard = ({ topic }) => {
  const { slug, description } = topic;

  return (
    <Card id="card">
      <Card.Body>
        <Card.Title>
          <big>{slug.toUpperCase()}</big>
        </Card.Title>
        <Card.Text>
          <small className="text-muted">{description}</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <Link to={`/articles?topic=${slug}`}>
          VIEW {slug.toUpperCase()} ARTICLES
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TopicCard;
