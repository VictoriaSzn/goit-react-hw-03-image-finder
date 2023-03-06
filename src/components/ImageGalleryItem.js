import styles from './styles.module.css';

export default function ImageGalleryItem({ tags, webformatURL }) {

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags} />
    </li>
  );
}


