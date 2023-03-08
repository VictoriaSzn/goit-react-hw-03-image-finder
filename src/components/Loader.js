import { Circles} from  'react-loader-spinner'

import styles from './styles.module.css';

export default function Loader() {
  
    return (
        <>
        <div className={styles.spinner}>
            
            <Circles
                height="180"
                width="180"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            
            </div>
            <h1 className={styles.loader_title}> Loading...</h1>
      </>     
    );
}
