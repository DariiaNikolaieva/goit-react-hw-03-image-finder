import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import propTypes from "prop-types";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imagesList, modalImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imagesList.map(({ id, webformatURL, largeImageURL, tags }) => {
        const openModal = () => modalImage(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  imagesList: propTypes.array,
  openModal: propTypes.func,
};
