import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.Button}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func,
};
