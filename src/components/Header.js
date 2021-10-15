import React from 'react';
import PropTypes from 'prop-types';
import SettingsIcon from '@material-ui/icons/Settings';
import MicIcon from '@material-ui/icons/Mic';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

const Header = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  const handleKey = (e) => {
    if (e.keyCode === 8) { handleClick(); }
  };

  const { currentView } = props;
  return (
    <div className="header">
      <div className="header-button">
        <div
          className="back-btn"
          role="button"
          onClick={() => handleClick()}
          onKeyPress={(e) => handleKey(e)}
          tabIndex="0"
        >
          <ArrowBackIosIcon />
        </div>
        <div className="header-year"><p>2021</p></div>
      </div>
      <div className="header-current-view">
        {currentView}
      </div>
      <div className="header-options">
        <MicIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
};

export default Header;
