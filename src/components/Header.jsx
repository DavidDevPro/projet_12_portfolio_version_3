import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation_container">
          <Link to="/" className="navigation_container_logo">
            <h1>Portfolio</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
