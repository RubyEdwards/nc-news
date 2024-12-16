import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../app";

const AllArticlesView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
};

export default AllArticlesView;
