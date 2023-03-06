import styles from './styles.module.css';

export default function Button({ onClck }) {

  return (
      <button
          type="button"
          className={styles.Button}
          onClick={onClck}
      >Load more
    </button>
  );
}