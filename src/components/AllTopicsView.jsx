import { useEffect, useState } from "react";
import { getTopics } from "../api";
import Loading from "./Loading";
import TopicList from "./TopicList";

const AllTopicsView = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="window">
      <h2>Topics:</h2>
      <TopicList topics={topics} />
    </section>
  );
};

export default AllTopicsView;
