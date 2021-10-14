import React from 'react';
import PropTypes from 'prop-types';

const CurrencyDetail = (props) => {
  const { detail } = props;
  const details = Object.entries(detail).map(([key, value]) => (
    <li key={key}>
      <div className="currency-detail-wrapper">
        <div>
          <p className="crypto-name">
            {key}
            {' '}
          </p>
        </div>
        <div>
          {value}
          {' '}
        </div>
      </div>
    </li>
  ));
  return (
    <ul className="currency-detail-ul">
      {details}
    </ul>
  );
};

CurrencyDetail.propTypes = {
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
export default CurrencyDetail;
