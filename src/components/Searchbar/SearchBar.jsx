import SearchbarStyled from './SearchBar.styled';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const inputValue = event.currentTarget.value;
    this.setState({ inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue === '') {
      toast.error('Empty input');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <SearchbarStyled>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={inputValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}

export default SearchBar;
