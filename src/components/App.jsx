import React from "react";
import { Component } from "react";
import Searchbar from './Searchbar';
import { ImageGallery } from './ImageGallery';
import Button from "./Button";
import Loader from './Loader';
import { Toaster } from 'react-hot-toast';
import styles from './styles.module.css';

export default class App extends Component {
  state = {
    textSearch: '',
    image: [],
    page: 1,
        
    error: null,
    status: 'idle',
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch) {
      this.setState({ status: 'pending', image: [] });
    }
      if (prevState.textSearch !== this.state.textSearch || prevState.page !== this.state.page) {
         

        fetch(`https://pixabay.com/api/?q=${this.state.textSearch}&page=${this.state.page}&key=32852753-8f3b804226363e950fb952518&image_type=photo&orientation=horizontal&per_page=12`)
          .then(response => response.json())
          .then(image => {
            console.log('image:>>', image);
            if (image.hits.length > 0) {
              this.setState({ image: [...this.state.image, ...image.hits], status: 'resolved' })
            }
            else { 
            //Promise.reject(new Error(`On request ${this.state.textSearch} nothing found!`),);
              alert(`On request ${this.state.textSearch} nothing found!`);
              this.setState({ status: 'idle' });
            return;
          }
            })
            .catch(error => {this.setState({ error, status: 'rejected' })
          })
      }
  }
  
  handleFormSubmit = value => {
     if (value !== this.state.textSearch){
   this.setState({ textSearch: value, page: 1, status: 'pending' });
  }}
 
   handleLoadMo = () => {
        this.setState((prev) => ({ page: prev.page + 1}));
     }

  render() {
    const { image, error, status} = this.state;
    if (status === 'idle') {
      return (
        <div className={styles.App} >
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
            }}
          />
          <Searchbar onSubmitProps={this.handleFormSubmit}  />
          {/* <ImageGallery image={image}  /> */}
         {/* <ImageGallery valueProps={this.state.textSearch} />*/}
         </div>
      )
    }
             
      if (status === 'rejected') {
        return (
          <>
            <Searchbar onSubmitProps={this.handleFormSubmit} />
            <h1>{error.message}</h1>
          </>
        )
      }

      if (status === 'pending') {
        return (
          <>
            <Searchbar onSubmitProps={this.handleFormSubmit} />
              {image.length > 0 && <ImageGallery image={image} />} 
            <Loader />
          </>
        )
      }

      if (status === 'resolved') { 
        return (
          <>
          <Searchbar onSubmitProps={this.handleFormSubmit}  />
          <ImageGallery image={image}  />
          <Button onClick={this.handleLoadMo}/>
         </>
      )  
      }
  }
 };
 