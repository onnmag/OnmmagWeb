import React from 'react';
import PropTypes from 'prop-types';


import ICON_NAME, { ICON } from './enum';

const ACTIVE_THEME = 'LIGHT';
const SIZE_MULTIPLIER = 5;

function Icon({ name, size, className, onClick }) {
  const GetIcon = (props) => (
      ICON[ACTIVE_THEME][name]({ ...props })
    );
  return (
    <div className={className} onClick={onClick} role="presentation">
      <GetIcon size={size * SIZE_MULTIPLIER} />
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  name: ICON_NAME.HOME,
  onClick: () => {},
  size: 5,
  className: '',
};

export {
  Icon as default,
  ICON_NAME,
};
