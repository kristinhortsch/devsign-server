const request = require('superagent');

const getQuote = () => {
  return request.get('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes')
    .then(res => res.body.quotes[0].quote);
};

module.exports = {
  getQuote
};
