import PropTypes from "prop-types";

const Input = ({ name, type, id }) => {
  return <input name={name} type={type} id={id} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Input;
