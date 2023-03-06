import { ImSpinner } from "react-icons/im";
//import ImageGalleryItem from "./ImageGalleryItem";
//import pendingImage from './pending.jpg';
import styles from './styles.module.css';
// const styles = {
    
// };

export default function Loader() {
  
    return (
        <div style={styles.spinner}>
            <ImSpinner size="32" className="icon-spin"/>
            Loading...
        </div>
           
    );
}