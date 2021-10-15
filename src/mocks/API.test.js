/* eslint-disable global-require */
const axios = require('axios');

jest.mock('axios');

describe('mock api calls', () => {
  test('end point in axios ', () => {
    const mockedResponse = { data: { id: '90', rank: '1' } };
    axios.get.mockResolvedValue(mockedResponse);
    const app = require('./mockAPI');
    app.getCoins();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.coinlore.net/api/tickers/?start=100&limit=1');
  });
});
