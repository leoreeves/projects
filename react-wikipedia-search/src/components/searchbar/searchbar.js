import React, { Component } from 'react';

import './searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.setInputSearchState = this.setInputSearchState.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.state = { inputField: '' };
  }

  setInputSearchState(event) {
    this.setState({ inputField: event.target.value });
  }

  submitSearch(event) {
    event.preventDefault();
    this.props.getArticleData(this.state.inputField);
    this.setState({ inputField: '' });
  }

  render() {
    return(
      <form
        className="search-form"
        onSubmit={this.submitSearch}
      >
        <input
          type="text"
          className="searchbar"
          placeholder="Enter search..."
          value={this.state.inputField}
          onChange={this.setInputSearchState}
          autoFocus="true"
          >
        </input>
        <input
          type="submit"
          value="Search"
          className="search-button"
        ></input>
      </form>
    )
  }
}

export default Searchbar;
