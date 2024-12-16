const ArticleCard = ({ article }) => {
  const { title, author, topic, created_at, votes, comment_count } = article;
  return (
    <div id="article-card">
      <h3>{title}</h3>
      <p id="author">by {author}</p>
      <ul id="article-info">
        <li>Topic: {topic}</li>
        <li>Posted: {created_at}</li>
        <li>Votes: {votes}</li>
        <li>Comments: {comment_count}</li>
      </ul>
    </div>
  );
};

export default ArticleCard;
