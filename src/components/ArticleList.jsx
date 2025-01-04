import ArticleCard from "./ArticleCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ArticleList = ({ articles }) => {
  return (
    <section id="article-list">
      <Row xs={1} md={2} xl={3} xxl={4} className="g-3">
        {articles.map((article, idx) => {
          return (
            <>
              <Col key={idx}>
                <ArticleCard key={article.article_id} article={article} />
              </Col>
            </>
          );
        })}
      </Row>
    </section>
  );
};

export default ArticleList;
