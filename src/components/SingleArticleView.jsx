import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../app";
import Loading from "./Loading";
import Article from "./Article";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

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

  if (isLoading) {
    return (
      <>
        <Loading />
        <Link to="/articles">BACK</Link>
      </>
    );
  }

  return (
    <section id="single-article-view">
      <div id="article-column">
        <Article article={article} />
        <Link to="/articles">BACK</Link>
      </div>
      <div id="comments-column">
        <CommentList article_id={article_id} />
      </div>
    </section>
  );
};

export default SingleArticleView;
