import { Component } from 'react';
import  Modal  from './Modal';
import styles from './styles.module.css';

export default class ImageGalleryItem extends Component{
  state = {
    isOpen: false 
  }
   handleClickImg = () => {
       this.setState({isOpen: true});
  };

   toggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };
  render() {
    const { tags, webformatURL, largeImageURL } = this.props;
    return (
      <>
        <li className={styles.ImageGalleryItem}>
          <img
            className={styles.ImageGalleryItem_image}
            src={webformatURL}
            alt={tags}
            //onClick={() =>onZoom(largeImageURL)}
            onClick={this.handleClickImg}
          />
         
        </li>
      
        {this.state.isOpen &&(
          <Modal
              image={largeImageURL}
              //onClick={this.closeModal}
               onClose={this.toggleModal}
              />
        )}
      </>
    );
  }
}


