import { useNavigate } from "react-router-dom";

const Article = ({ article }) => {
  const {
    title,
    author,
    body,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;

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
    </>
  );
};

export default Article;
