import TopicCard from "./TopicCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TopicList = ({ topics }) => {
  return (
    <section id="topic-list">
      <Row xs={1} md={2} xl={3} xxl={4} className="g-3">
        {topics.map((topic, idx) => {
          return (
            <>
              <Col key={idx}>
                <TopicCard key={topic.slug} topic={topic} />
              </Col>
            </>
          );
        })}
      </Row>
    </section>
  );
};

export default TopicList;
