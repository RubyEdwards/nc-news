import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <section id="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
