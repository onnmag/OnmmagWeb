import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';
import ICONS_NAME from '../../../Icon/enum';

import styles from './index.scss';

function Footer({ id, handleComment }) {
  return (
    <div className={styles.container} key={id}>
      <div className={styles.about}>
        <span>999 likes</span>
        <span> 30 comments</span>
      </div>
      <div className={styles.controls}>
        <Icon name={ICONS_NAME.LIKE} size={4} />
        <Icon name={ICONS_NAME.MESSAGE} size={4} onClick={handleComment} />
        <Icon name={ICONS_NAME.SHARE} size={4} />
      </div>
    </div>
  );
}

Footer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleComment: PropTypes.func.isRequired,
};

export default Footer;
