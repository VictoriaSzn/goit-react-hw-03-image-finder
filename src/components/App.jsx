// import { ImageGallery } from "./ImageGallery";
import React from "react";
import { Component } from "react";
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { Toaster } from 'react-hot-toast';
import styles from './styles.module.css';

export default class App extends Component {
  state = {
    textSearch: '',
    //image: []
  }
  
  handleFormSubmit = textSearch => {
    this.setState({ textSearch });
    
  }
  ////
  //newSerch = image => {
  //  this.setState({ image });
  //}
  ////
  render() {
    return (
      <div className={styles.App} >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
          }}
        />
        <Searchbar
          onSubmitProps={this.handleFormSubmit}
        //onNewSearch={this.newSerch} 
        />
        <ImageGallery valueProps={this.state.textSearch} />
      </div>
    );
  }
 };
 