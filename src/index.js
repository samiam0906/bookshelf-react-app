import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root'));
registerServiceWorker();

// 1. Take search term in SearchBar and pass it into url with API_KEY
// 2. Make GET request to the Google Books API_KEY. This request should return an array.
// 3. The array from the GET request will update the state of the books array in App.js
// 4. The books array will get passed to BookList and a list of books will get generated via the map function
// 5. This list of books will get passed from BookList to BookListItem
// 6. The embedBook function, which will be passed to the BookList via props, will get called. This function will render a new viewer to the page.
