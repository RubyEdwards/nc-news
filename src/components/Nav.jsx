import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section id="nav-bar">
      <Link to="/articles">ARTICLES</Link>
      <Link to="/topics">TOPICS</Link>
      <Link to="/users">USERS</Link>
    </section>
  );
};

export default Nav;
