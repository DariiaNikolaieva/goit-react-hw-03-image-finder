import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
  return (
    <Loader
      className={styles.Loader}
      type="ThreeDots"
      color="#fc0362"
      height={80}
      width={80}
    />
  );
};

export default LoaderSpinner;
