import React from 'react';
import { Link } from 'react-router-dom';
import BookDetail from './BookDetail';

const BookListItem = ({ book }) => {
  const imageUrl = book.volumeInfo.imageLinks.smallThumbnail;
  const textSnippet = book.searchInfo ? book.searchInfo.textSnippet : '';

  return (
    <li className="list-group-item">
      <div className="book-list media">

        <div className="text-xs-right">

            <Link className="btn btn-primary" to="/book-detail">
              See Book Details
            </Link>

        </div>

        <div className="media-left">
          <Link to="/book-detail"><img className="media-object" alt="Book thumbnail" src={imageUrl} /></Link>
        </div>

        <div className="media-body">
          <div className="media-heading">
            <Link to="/book-detail">Title: {book.volumeInfo.title}</Link>
          </div>
          <p>{textSnippet}</p>
        </div>
      </div>
    </li>
  )
}

export default BookListItem;
