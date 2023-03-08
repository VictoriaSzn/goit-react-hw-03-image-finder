import { Component } from "react";
import styles from './styles.module.css';
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';

export default class Searchbar extends Component{
    state = {
         value: ''
    }
    handleChange= evt => {
        this.setState({ value: evt.target.value })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.value.trim() === '') {
            return toast.error('enter a word for search.')
        }
        this.props.onSubmitProps(this.state.value);
        this.setState({ value: '' });
    }

     render() {
         return (
             <header className={styles.Searchbar} >
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <input
                        className={styles.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                         placeholder="Search images and photos"
                         value={this.state.value}
                         onChange={this.handleChange}
                     />
                      <button type="submit" className={styles.SearchForm_button}>
                        <ImSearch style = {{marginRight: 8}}/>
                     </button>
                </form>
            </header>
        );
    }
}

