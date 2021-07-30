import propTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, tags, openModal }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem__image}
        src={src}
        alt={tags}
        onClick={openModal}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  openModal: propTypes.func,
};
