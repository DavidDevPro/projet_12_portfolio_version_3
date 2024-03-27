import { Link } from "react-router-dom";
import data from "../data/navigation.json";

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation_container">
          <Link to="/" className="navigation_container_logo">
            <h1>Portfolio</h1>
          </Link>
        </div>
        <ul className="navigation_container_menu">
          {data.map((item, index) => (
            <li key={"item" + index} className="navigation_container_menu_item">
              <Link
                to={item.link}
                className="navigation_container_menu_item_links"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
