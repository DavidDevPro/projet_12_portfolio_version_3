import { Link } from "react-router-dom";

const HomeText = () => {
  return (
    <div className="home_text">
      <h2>Bonjour,</h2>
      <div className="home_text_name">
        <h3>Je suis </h3>
        <h4>David</h4>
      </div>
      <h5>Développeur Front-End</h5>
      <Link to="/contact">
        <button className="button button_contact">Contactez-moi</button>
      </Link>
    </div>
  );
};

export default HomeText;
