import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const API_KEY = 'AIzaSyA2Mgvl4I5ncmBfYIpxSGi1EM3BSUGXNN4';
const url = 'https://www.googleapis.com/books/v1/volumes?q=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  // Take the search term from SearchBar and pass it to the google Books API url to make a GET request. This will update state.
  onSearchSubmit = (term) => {
    const getUrl = url + term + `&key=${API_KEY}`;
    console.log(getUrl);

    // get request to display books based on search term
    axios.get(getUrl)
      .then(response => {
        this.setState({ books: [...response.data.items] })
        console.log('State: ', this.state.books)
      })
      .catch(err => console.log(err))

    // fetch(getUrl)
    //   .then(response => response.json())
    //   .then(bookData => {
    //     this.setState({ books: [...bookData.items] })
    //     console.log('State: ', this.state.books)
    //   })
  }

  render() {
    const currentPath = window.location.pathname
    console.log(currentPath)

    if (currentPath === '/') {
      return (
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      )
    }

    return (
      <div>

        {/* <SearchBar onSearchSubmit={this.onSearchSubmit} /> */}
          <div>
            {/* put most specific routes at the top of Switch */}
            <Switch>
              <Route path="/book-list" render={() => (
                <div>
                  <SearchBar onSearchSubmit={this.onSearchSubmit} />
                  <BookList books={this.state.books} />
                </div>
              )} />

              <Route path="/book-detail" component={BookDetail} />
            </Switch>
          </div>

      </div>
    );
  }
}

export default App;
