import React from 'react';
import PropTypes from 'prop-types';
import img from '../img.jpg';

const CryptoValue = (props) => {
  const { name, price, classList } = props;
  return (
    <section className={classList}>
      <div className="image-wrapper">
        <img
          className="crypto-image"
          src={img}
          alt="
              a crypto value"
        />
      </div>
      <div className="crypto-value">
        <h3 className="txt-bold crypto-value-name">
          {name}
          {' '}
        </h3>
        <p>
          {`${price} USD`}
          {' '}
        </p>
      </div>
    </section>
  );
};

CryptoValue.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  classList: PropTypes.string.isRequired,
};

export default CryptoValue;
