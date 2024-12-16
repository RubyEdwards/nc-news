import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section id="nav-bar">
      <Link to="/">
        <p>ARTICLES</p>
      </Link>
      <Link to="/">
        <p>TOPICS</p>
      </Link>
      <Link to="/">
        <p>USERS</p>
      </Link>
    </section>
  );
};

export default Nav;
