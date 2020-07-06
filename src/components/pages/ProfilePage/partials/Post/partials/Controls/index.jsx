import React from 'react';
import approx from 'approximate-number';
import PropTypes from 'prop-types';

import Icon, { ICON_NAME } from '../../../../../../common/Icon';
import styles from './index.scss';

function Controls({ likes, comments, expandPost, id }) {
  return (
    <div
      className={styles.container}
      role="presentation"
      onClick={() => expandPost(id)}
    >
      <div className={styles.status}>
        <Icon name={ICON_NAME.LIKE} />
        <span>{approx(likes)}</span>
      </div>
      <div className={styles.status}>
        <Icon name={ICON_NAME.COMMENT} />
        <span>{approx(comments)}</span>
      </div>
    </div>
  );
}

Controls.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  expandPost: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Controls;
