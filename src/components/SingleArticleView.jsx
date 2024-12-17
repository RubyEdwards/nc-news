import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../app";
import Loading from "./Loading";
import Article from "./Article";

const SingleArticleView = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((fetchedArticle) => {
      setArticle(fetchedArticle);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <section id="single-article-view">
      <p>You are viewing article {article_id}!</p>
      <Article article={article} />
    </section>
  );
};

export default SingleArticleView;
