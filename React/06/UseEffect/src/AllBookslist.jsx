import {useEffect, useState} from 'react';

export function Bookslist() {
  const [books, setbooks] = useState([]);
  const [err, setError] = useState('');

  useEffect(() => {
    fetch('https://api.freeapi.app/api/v1/public/books/book/random')
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setbooks([result.data]);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}
