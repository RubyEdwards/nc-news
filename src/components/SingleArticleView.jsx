import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle, getComments } from "../app";
import Loading from "./Loading";
import Article from "./Article";
import CommentList from "./CommentList";

const SingleArticleView = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((fetchedArticle) => {
      setArticle(fetchedArticle);
      setIsLoading(false);
    });
    getComments(article_id).then((fetchedComments) => {
      setComments(fetchedComments);
    });
  }, []);

  const handleClick = () => {
    navigate("/articles");
  };

  if (isLoading) {
    return (
      <>
        <Loading />
        <button type="button" onClick={handleClick}>
          BACK
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>You are viewing article {article_id}!</p>
        <section id="single-article-view">
          <div id="article-column">
            <Article article={article} />
            <button type="button" onClick={handleClick}>
              BACK
            </button>
          </div>
          <div id="comments-column">
            <CommentList comments={comments} />
          </div>
        </section>
      </>
    );
  }
};

export default SingleArticleView;
