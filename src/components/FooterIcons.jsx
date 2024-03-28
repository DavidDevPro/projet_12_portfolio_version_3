import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterIcons = ({ url, label, children }) => {
  return (
    <Link
      to={url}
      className="footer_content_boxIcon_icon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      size={20}
    >
      {children}
    </Link>
  );
};

FooterIcons.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterIcons;
