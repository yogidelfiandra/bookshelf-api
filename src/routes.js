const { addBookHandler, gettAllBooksHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: gettAllBooksHandler,
  },
];

module.exports = routes;
