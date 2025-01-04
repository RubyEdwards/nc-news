import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";
import ArticleList from "./ArticleList";
import { useSearchParams } from "react-router-dom";

const AllArticlesView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");
  const validSortBy = [
    "author",
    "title",
    "article_id",
    "created_at",
    "votes",
    "comment_count",
  ];
  const validOrder = ["asc", "desc"];

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, selectedSort, selectedOrder).then(
      (fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      }
    );
  }, [topicQuery, selectedSort, selectedOrder]);

  const handleChange = (e) => {
    const { name } = e.target;
    if (e.target.checked) {
      setSelectedSort(name);
      setSearchParams({ sort_by: name, order: selectedOrder });
    } else {
      setSearchParams({ sort_by: "created_at", order: selectedOrder });
      setSelectedSort("created_at");
    }
  };

  const changeOrder = (e) => {
    const { id } = e.target;
    setSelectedOrder(id);
    setSearchParams({ sort_by: "created_at", order: id });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="window">
      <h2>Articles{topicQuery ? ` for ${topicQuery}` : null}:</h2>
      {topicQuery ? null : (
        <>
          <section id="sorting">
            <p>Sort by </p>
            {validSortBy.map((sort) => {
              return (
                <div key={sort} id="sort-blocks">
                  <label htmlFor={sort}>{sort}</label>
                  <input
                    type="checkbox"
                    id={sort}
                    name={sort}
                    checked={selectedSort === sort}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          </section>
          <section id="ordering">
            <p>Order:</p>
            <form action="/">
              {validOrder.map((order, index) => {
                return (
                  <div key={index} id="order-buttons">
                    <input
                      type="radio"
                      id={order}
                      name="order"
                      checked={order === selectedOrder}
                      onChange={changeOrder}
                    />
                    <label key={order} htmlFor={order}>
                      {order}
                    </label>
                  </div>
                );
              })}
            </form>
          </section>
        </>
      )}

      <ArticleList articles={articles} />
    </section>
  );
};

export default AllArticlesView;
