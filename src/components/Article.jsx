import { useState } from "react";
import { downvoteArticle, upvoteArticle } from "../app";

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
    article_id,
  } = article;
  const [userVotes, setUserVotes] = useState(0);
  const [error, setError] = useState(null);

  const upvote = () => {
    setUserVotes((currUserVotes) => {
      return currUserVotes + 1;
    });
    setError(null);
    upvoteArticle(article_id).catch((err) => {
      setUserVotes((currUserVotes) => {
        setError("Couldn't change vote at this time, please try again later!");
        return currUserVotes - 1;
      });
    });
  };

  const downvote = () => {
    setUserVotes((currUserVotes) => {
      return currUserVotes - 1;
    });
    setError(null);
    downvoteArticle(article_id).catch((err) => {
      setUserVotes((currUserVotes) => {
        setError("Couldn't change vote at this time, please try again later!");
        return currUserVotes + 1;
      });
    });
  };

  const formatDate = () => {
    const date = new Date(created_at);
    let min = date.getMinutes();
    let hr = date.getHours();
    const dd = date.getDate();
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    min = min < 10 ? `0${min}` : min;
    hr = hr < 10 ? `0${hr}` : hr;
    return `${hr}:${min} ${dd}/${mm}/${yy}`;
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
          <li>Posted at {formatDate()}</li>
          <li>{votes + userVotes} votes</li>
          <li>{comment_count} comments</li>
        </ul>
        <div id="article-buttons">
          {error ? <p>{error}</p> : null}
          <p id="article-vote">
            Vote:
            <button type="button" onClick={upvote}>
              +
            </button>
            <button type="button" onClick={downvote}>
              -
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Article;
