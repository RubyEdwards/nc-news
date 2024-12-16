import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <section id="article-list">
      <h2>Articles:</h2>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
