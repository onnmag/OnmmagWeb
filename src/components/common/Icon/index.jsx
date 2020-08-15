import React, { useMemo } from 'react';
import PropTypes from 'prop-types';


import ICON_NAME, { ICON } from './enum';
import { mediaQuery, BREAKPOINTS } from '../../../utils';

const ACTIVE_THEME = 'LIGHT';

function Icon({ name, size, className, onClick }) {
  const SIZE_MULTIPLIER = useMemo(() => {
    if (mediaQuery(BREAKPOINTS.PHONE)) {
      return 5.5;
    }
    if (mediaQuery(BREAKPOINTS.SMALL_SCREEN)) {
      return 4;
    }
    return 5;
  }, []);
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
