import { Component } from "react";
import styles from './styles.module.css';
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export default class Searchbar extends Component{
    state = {
        value: ''     
    }
    handleChange= evt => {
        this.setState({ value: evt.target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.value.trim() === '') {
            return toast.error('your request is empty')
        }
        this.props.onSubmitProps(this.state.value.trim());
        this.setState({ value: '' });
    }

    render() {
        const { value } = this.state;
        const { handleChange, handleSubmit } = this;

         return (
             <header className={styles.Searchbar} >
                <form onSubmit={handleSubmit} className={styles.SearchForm}>
                    <input
                        className={styles.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                         placeholder="Search images and photos"
                         value={value}
                         onChange={handleChange}
                     />
                      <button type="submit" className={styles.SearchForm_button}>
                        <ImSearch style = {{marginRight: 8}}/>
                     </button>
                </form>
            </header>
        );
    }
};
Searchbar.propTypes = {
  onSubmitProps: PropTypes.func.isRequired,

};
