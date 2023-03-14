import { Component } from 'react';
import  Modal  from './Modal';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

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
            onClick={this.handleClickImg}
          />
         
        </li>
      
        {this.state.isOpen &&(
          <Modal
              image={largeImageURL}
              onClose={this.toggleModal}
              />
        )}
      </>
    );
  }
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL:PropTypes.string.isRequired
};


