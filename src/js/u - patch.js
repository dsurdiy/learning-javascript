const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBookById({ title: 'Книга по NODE.js' }, 10);

updateBookById({ rating: 5 }, 9);

updateBookById({ rating: 3.23, author: 'Манго' }, 8);
