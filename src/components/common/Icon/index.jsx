import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


import ICON_NAME, { ICON } from './enum';

const ACTIVE_THEME = 'LIGHT';
const SIZE_MULTIPLIER = 5;

function Icon({ name, size, primaryClass, secondaryClass, className }) {
  function getClassName() {
    return cx(ICON[ACTIVE_THEME][name], {
      [primaryClass]: primaryClass,
      [secondaryClass]: secondaryClass,
    });
  }
  return (
    <div className={className}>
      <i className={getClassName()} style={{ width: `${size * SIZE_MULTIPLIER}px`, height: `${size * SIZE_MULTIPLIER}px` }} />
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  primaryClass: PropTypes.string,
  secondaryClass: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  name: ICON_NAME.HOME,
  size: 5,
  primaryClass: '',
  secondaryClass: '',
  className: '',
};

export {
  Icon as default,
  ICON_NAME,
};
