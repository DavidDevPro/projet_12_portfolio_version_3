import PropTypes from "prop-types";

const Button = ({ className, text, type }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
