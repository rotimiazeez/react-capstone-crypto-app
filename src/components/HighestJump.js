import React from 'react';
import PropTypes from 'prop-types';
import win from '../win.png';

const HighestJump = (props) => {
  const {
    name, percent, price, rank,
  } = props;
  return (
    <section className="highest-jump bg-red">
      <div>
        <img className="highest-img" src={win} alt="crypto" />
      </div>
      <div className="highest-info">
        <h3>Highest jump of the day</h3>
        <p>
          name:
          {' '}
          <span className="txt-bold">
            {name}
          </span>
        </p>
        <p>
          Jump:
          {' '}
          <span className="txt-bold">
            {percent}
            %
          </span>
          {' '}
        </p>
        <p>
          Current price:
          {' '}
          <span className="txt-bold">
            $
            {price}
            {' '}
          </span>
        </p>
        <p>
          Current rank:
          {' '}
          <span className="txt-bold">
            {rank}
          </span>
        </p>
      </div>
    </section>
  );
};

HighestJump.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};
export default HighestJump;
