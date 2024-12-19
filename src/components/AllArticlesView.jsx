import { useEffect, useState } from "react";
import { getArticles } from "../app";
import Loading from "./Loading";
import ArticleList from "./ArticleList";
import { useSearchParams } from "react-router-dom";

const AllArticlesView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery).then((fetchedArticles) => {
      setArticles(fetchedArticles);
      setIsLoading(false);
    });
  }, [topicQuery]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h2>Articles{topicQuery ? ` for ${topicQuery}` : null}:</h2>
      <ArticleList articles={articles} />
    </>
  );
};

export default AllArticlesView;
