import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../app";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
  const currTopics = [];
  const [availableTopics, setAvailableTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      topics.map(({ slug }) => {
        currTopics.push(slug);
        if (currTopics.length === topics.length) {
          setAvailableTopics([...new Set(currTopics)]);
        }
      });
    });
  }, []);

  return (
    <section id="nav-bar">
      <Link to="/articles">ARTICLES</Link>
      <Dropdown>
        <Dropdown.Toggle id="topic-button" value="topics-button">
          TOPICS
        </Dropdown.Toggle>
        <Dropdown.Menu id="topic-menu">
          {availableTopics.map((topic) => {
            return (
              <Dropdown.Item
                className="menu-items"
                key={topic}
                href={`/articles?topic=${topic}`}
              >
                {topic}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Link to="/users">USERS</Link>
    </section>
  );
};

export default Nav;
