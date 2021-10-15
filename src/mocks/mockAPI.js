const axios = require('axios');

const getCoins = () => {
  axios.get('https://api.coinlore.net/api/tickers/?start=100&limit=1')
    .then((response) => response.data)
    .catch((error) => error);
};

module.exports = { getCoins };
