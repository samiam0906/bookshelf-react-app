import React from 'react';
import BookListItem from './BookListItem';

const BookList = (props) => {
  console.log("Props are: ", props);
  console.log("Book props are: ", props.books);
  const currentPath = window.location.pathname;

  const bookItems = props.books.map((book) => {
    return <BookListItem key={book.id} book={book} />
  })
  console.log(bookItems)


  return (
    <ul className="col-md-4 list-group">
      {bookItems}
    </ul>
  )
}

export default BookList;
