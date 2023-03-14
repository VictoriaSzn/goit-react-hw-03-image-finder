import ImageGalleryItem from './ImageGalleryItem';
import styles from './styles.module.css';
import PropTypes from 'prop-types';


export const ImageGallery =({ image})=>{
   return (
      <ul className={styles.ImageGallery}>
         {image.map(({ id, tags, webformatURL, largeImageURL }) =>
            <ImageGalleryItem
               key={id}
               tags={tags}
               webformatURL={webformatURL}
               largeImageURL={largeImageURL}
            />
         )}
      </ul>
   );
};

ImageGallery.propTypes = {
  image: PropTypes.array.isRequired
}; 