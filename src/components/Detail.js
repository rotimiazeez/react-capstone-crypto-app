/* eslint camelcase: ["error", {properties: "never"}] */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import PropTypes from 'prop-types';
import CryptoValue from './CryptoValue';
import CurrencyDetail from './CurrencyDetail';
import Header from './Header';
import Breakdown from './Breakdown';

const Detail = (props) => {
  const { detail } = props;
  const { name, price_usd: price } = detail;

  return (
    <div>
      <Header currentView={`${name} view`} />
      <CryptoValue name={name} price={price} classList="crypto-value-wrapper bg-red" />
      <Breakdown text={`${name} breakdown`} />
      <CurrencyDetail detail={detail} />
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nameid: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    price_usd: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.string.isRequired,
    percent_change_1h: PropTypes.string.isRequired,
    percent_change_7d: PropTypes.string.isRequired,
    price_btc: PropTypes.string.isRequired,
    market_cap_usd: PropTypes.string.isRequired,
    volume24: PropTypes.number.isRequired,
    volume24a: PropTypes.number.isRequired,
    csupply: PropTypes.string.isRequired,
    tsupply: PropTypes.string.isRequired,
    msupply: PropTypes.string.isRequired,
  }).isRequired,
};
export default Detail;
