const BASE_URL = 'http://localhost:4040';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addBook({
  title: 'Книга по HTML',
  author: 'Я',
  genres: ['HTML'],
  rating: 7,
}).then(renderBook);

addBook({
  title: 'Книга по React',
  author: 'Я',
  genres: ['React'],
  rating: 8,
}).then(renderBook);

function renderBook(book) {
  console.log('Пришел ответ от бекенда, можно рисовать');
  console.log(book);
}
