import React from 'react';
import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history';

const BookDetail = (props) => {

  const {bookDetail} = props.location.state;
  console.log(bookDetail);

  return (
    <div>
      {console.log(props)}
      {console.log(props.match.params)}
      <h3>{bookDetail.volumeInfo.title}</h3>
      <img className="media-object" alt="Book thumbnail" src={bookDetail.volumeInfo.imageLinks.smallThumbnail}/>


    </div>
  )
}

export default BookDetail;
