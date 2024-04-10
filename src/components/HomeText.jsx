import { Link } from "react-router-dom";
import Button from "./Button";

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
        <Button className={"button"} type={"submit"} text={"Contactez-moi"} />
      </Link>
    </div>
  );
};

export default HomeText;
