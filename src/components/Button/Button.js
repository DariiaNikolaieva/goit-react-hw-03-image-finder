import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
