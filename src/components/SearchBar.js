import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      firedRedirect: false
    };
  }

  onInputChange = (term) => {

    this.setState({
      searchTerm: term
    })
    console.log('Search Term: ', this.state.searchTerm);
  }

  handleSubmit = (e, term) => {
    e.preventDefault();
    term = e.target.searchTerm.value
    this.props.onSearchSubmit(term)
    this.setState({ firedRedirect: true })
    console.log('Redirect: ', this.state.firedRedirect)
  }

  render() {
    const currentPath = window.location.pathname;
    if (this.state.firedRedirect && currentPath !== '/book-list') {
      return (
        <Redirect to="/book-list"/>
      )
    }

    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit}>

          <input onChange={e => this.onInputChange(e.target.value)} type="text" name="searchTerm" placeholder="Enter Search Term" value={this.state.titleSearchTerm} />

          <input type="submit" name="submit" value="Submit"/>

        </form>
      </div>
    )
  }

}

export default SearchBar;
