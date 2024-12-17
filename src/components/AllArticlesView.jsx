import { useEffect, useState } from "react";
import { getArticles } from "../app";
import Loading from "./Loading";
import ArticleList from "./ArticleList";

const AllArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h2>Articles:</h2>
        <ArticleList articles={articles} />
      </>
    );
  }
};

export default AllArticlesView;
