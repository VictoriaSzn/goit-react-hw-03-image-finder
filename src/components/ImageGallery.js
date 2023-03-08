import { Component } from "react";
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import styles from './styles.module.css';

export default class ImageGallery extends Component{
   state = {
      image: [],
      error: null,
      status: 'idle',
      page: 1,
      //selectedImage: null
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.valueProps !== this.props.valueProps || prevState.page !== this.state.page) {
         this.setState({ status: 'pending' });

         fetch(`https://pixabay.com/api/?q=${this.props.valueProps}&page=${this.state.page}&key=32852753-8f3b804226363e950fb952518&image_type=photo&orientation=horizontal&per_page=12`)
             .then(response => {
                if (response.ok) {
                   return response.json();
                }
                return Promise.reject(new Error(`по запиту ${this.props.valueProps} картинки відсутні`))
             })
          // .then((image) => { console.log('image:>>', image);
          // })
             .then(image => this.setState({
                   image:[...this.state.image, ...image.hits],
                   status: 'resolved'
                })
             )
             .catch(error => this.setState({ error, status: 'rejected' }));
            
         //    .then(response => response.json())
         //    .then(image => {
         //       console.log('image:>>', image);
         //       if (image.total !== 0) {
         //       return Promise.reject(image.message)
         //       }
         //       this.setState({ image:[...this.state.image, ...image.hits], status:'resolved' })
         //    })
         //    .catch(error => {this.setState({ error, status: 'rejected' })
            
         // })
      }
      
   }
   handleLoad = () => {
      this.setState((prev) => ({ page: prev.page + 1 }));
   }
   render() {
      const { image, error, status } = this.state;
      //const { onZoom } = this.props;
     
      if (status === 'rejected') {
         return <h1>{error.message}</h1>; 
      }

      if (status === 'pending') {
         return <Loader />;
      }

      if (status === 'resolved') { 
         return (
            <>
            <ul className={styles.ImageGallery}>
               {image.map((el) => 
                  <ImageGalleryItem
                     key={el.id}
                     tags={el.tags}
                     webformatURL={el.webformatURL}
                     largeImageURL={el.largeImageURL}
                     //onZoom={onZoom}
                  />
               )}
               </ul>
               <Button onClck={this.handleLoad} />
            </>
         )
      }
   }
}
 