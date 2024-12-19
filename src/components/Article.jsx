import { useState } from "react";
import { voteOnArticle } from "../app";
import { formatDate } from "../utils/formatDate";

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

  const handleClick = (e) => {
    let vote = 1;
    const { name } = e.target;
    if (name === "downvote") vote = -1;
    setUserVotes((currUserVotes) => {
      return currUserVotes + vote;
    });
    voteOnArticle(name, article_id).catch((err) => {
      setUserVotes((currUserVotes) => {
        setError("Vote not added, please try again later");
        return currUserVotes - vote;
      });
    });
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
          <li>Posted at {formatDate(created_at)}</li>
          <li>{votes + userVotes} votes</li>
          <li>{comment_count} comments</li>
        </ul>
        <div id="article-buttons">
          {error ? <p>{error}</p> : null}
          <p id="article-vote">
            Vote:
            <button type="button" onClick={handleClick} name="upvote">
              +
            </button>
            <button type="button" onClick={handleClick} name="downvote">
              -
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Article;
