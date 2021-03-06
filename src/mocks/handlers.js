import { rest } from 'msw';

const response = {
  data: [
    {
      id: '90',
      symbol: 'BTC',
      name: 'Bitcoin',
      nameid: 'bitcoin',
      rank: 1,
      price_usd: '45519.76',
      percent_change_24h: '-3.41',
      percent_change_1h: '0.14',
      percent_change_7d: '-8.23',
      price_btc: '1.00',
      market_cap_usd: '853912407736.67',
      volume24: 30502897515.844677,
      volume24a: 34331942033.702774,
      csupply: '18759159.00',
      tsupply: '18759159',
      msupply: '21000000',
    },
    {
      id: '80',
      symbol: 'ETH',
      name: 'Ethereum',
      nameid: 'ethereum',
      rank: 2,
      price_usd: '3300.82',
      percent_change_24h: '-6.92',
      percent_change_1h: '0.08',
      percent_change_7d: '-13.14',
      price_btc: '0.072533',
      market_cap_usd: '385316293789.63',
      volume24: 19779847965.106403,
      volume24a: 24350700963.840893,
      csupply: '116733553.00',
      tsupply: '116733553',
      msupply: '',
    },
    {
      id: '257',
      symbol: 'ADA',
      name: 'Cardano',
      nameid: 'cardano',
      rank: 3,
      price_usd: '2.39',
      percent_change_24h: '-7.46',
      percent_change_1h: '0.56',
      percent_change_7d: '-19.33',
      price_btc: '0.000053',
      market_cap_usd: '76358976671.65',
      volume24: 3633559214.052779,
      volume24a: 4745905021.905825,
      csupply: '31948309440.00',
      tsupply: '31112483745',
      msupply: '45000000000',
    },
    {
      id: '2710',
      symbol: 'BNB',
      name: 'Binance Coin',
      nameid: 'binance-coin',
      rank: 4,
      price_usd: '404.34',
      percent_change_24h: '-6.98',
      percent_change_1h: '-0.09',
      percent_change_7d: '-16.81',
      price_btc: '0.008885',
      market_cap_usd: '62483037060.91',
      volume24: 1650640536.0109043,
      volume24a: 1766790723.9747794,
      csupply: '154532785.00',
      tsupply: '192443301',
      msupply: '200000000',
    },
    {
      id: '48543',
      symbol: 'SOL',
      name: 'Solana',
      nameid: 'solana',
      rank: 5,
      price_usd: '173.47',
      percent_change_24h: '-11.88',
      percent_change_1h: '-2.07',
      percent_change_7d: '26.35',
      price_btc: '0.003812',
      market_cap_usd: '46418932636.83',
      volume24: 6040341471.049095,
      volume24a: 11215156174.641312,
      csupply: '267594634.00',
      tsupply: '491561409.22682',
      msupply: '',
    },
    {
      id: '58',
      symbol: 'XRP',
      name: 'XRP',
      nameid: 'ripple',
      rank: 6,
      price_usd: '1.07',
      percent_change_24h: '-4.75',
      percent_change_1h: '-0.03',
      percent_change_7d: '-16.48',
      price_btc: '0.000023',
      market_cap_usd: '45779588643.54',
      volume24: 4693200181.882236,
      volume24a: 3614926264.6784472,
      csupply: '42909539227.00',
      tsupply: '99991841593',
      msupply: '100000000000',
    },
    {
      id: '518',
      symbol: 'USDT',
      name: 'Tether',
      nameid: 'tether',
      rank: 7,
      price_usd: '1.00',
      percent_change_24h: '0.05',
      percent_change_1h: '0.12',
      percent_change_7d: '0.12',
      price_btc: '0.000022',
      market_cap_usd: '39882574653.90',
      volume24: 71016073424.85077,
      volume24a: 81635465540.08662,
      csupply: '39838509134.00',
      tsupply: '36466881803',
      msupply: '',
    },
    {
      id: '2',
      symbol: 'DOGE',
      name: 'Dogecoin',
      nameid: 'dogecoin',
      rank: 8,
      price_usd: '0.241767',
      percent_change_24h: '-7.07',
      percent_change_1h: '-0.35',
      percent_change_7d: '-18.09',
      price_btc: '0.000005',
      market_cap_usd: '31511447518.12',
      volume24: 1134212861.1947672,
      volume24a: 1310439489.8336768,
      csupply: '130337856384.00',
      tsupply: '130337856384',
      msupply: '',
    },
    {
      id: '45219',
      symbol: 'DOT',
      name: 'Polkadot',
      nameid: 'polkadot',
      rank: 9,
      price_usd: '29.00',
      percent_change_24h: '-7.73',
      percent_change_1h: '-1.54',
      percent_change_7d: '-12.48',
      price_btc: '0.000637',
      market_cap_usd: '26032445931.94',
      volume24: 2630976476.1156664,
      volume24a: 2258010000.8050714,
      csupply: '897657920.00',
      tsupply: '897657920',
      msupply: '1000000000',
    },
    {
      id: '48537',
      symbol: 'LUNA',
      name: 'Terra',
      nameid: 'terra-luna',
      rank: 10,
      price_usd: '42.40',
      percent_change_24h: '40.03',
      percent_change_1h: '6.56',
      percent_change_7d: '29.06',
      price_btc: '0.000932',
      market_cap_usd: '17094083882.13',
      volume24: 23161652356.686604,
      volume24a: 6540975302.2340555,
      csupply: '403145363.00',
      tsupply: '948798839.82726',
      msupply: '',
    }],
};

const handlers = [
  rest.get('https://api.coinlore.net/api/tickers/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(response),
  )),
];

export default handlers;
