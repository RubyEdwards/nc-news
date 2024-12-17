import { useNavigate } from "react-router-dom";

const Article = ({ article }) => {
  const {
    title,
    author,
    article_id,
    body,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;

  const navigate = useNavigate();

  const date = new Date(created_at);
  const min = date.getMinutes();
  const hr = date.getHours();
  const dd = date.getDate();
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dateStr = `${min}:${hr} ${dd}/${mm}/${yy}`;

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <section id="article">
        <h2>{title}</h2>
        <p>by {author}</p>
        <img src={article_img_url} alt="" />
        <p>{body}</p>
        <ul className="article-info">
          <li>Topic: {topic}</li>
          <li>Posted at {dateStr}</li>
          <li>{votes} votes</li>
          <li>{comment_count} comments</li>
        </ul>
      </section>
      <button type="button" onClick={handleClick}>
        BACK
      </button>
    </>
  );
};

export default Article;
