import React from 'react';
import PropTypes from 'prop-types';
import approx from 'approximate-number';

import Icon, { ICON_NAME } from '../Icon';

import styles from './index.scss';

const TYPE = {
  LIKE: ICON_NAME.VIDEO_LIKE,
  DISLIKE: ICON_NAME.DISLIKE,
};

function LikeDislike({ type, size, count }) {
  return (
    <div className={styles.container}>
      <Icon name={type} size={size} className={styles.icon} />
      {count ? <span className={styles.count}>{approx(count)}</span> : null}
    </div>
  );
}

LikeDislike.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  count: PropTypes.number,
};

LikeDislike.defaultProps = {
  type: TYPE.LIKE,
  size: 3,
  count: 0,
};

export {
  LikeDislike as default,
  TYPE,
};
